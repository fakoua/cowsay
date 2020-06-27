export const say = (text: string, wrap?: number): string => {
  const delimiters = {
    first: ["/", "\\"],
    middle: ["|", "|"],
    last: ["\\", "/"],
    only: ["<", ">"],
  };

  return format(text, delimiters, wrap);
};

export const think = (text: string, wrap?: number): string => {
  const delimiters = {
    first: ["(", ")"],
    middle: ["(", ")"],
    last: ["(", ")"],
    only: ["(", ")"],
  };

  return format(text, delimiters, wrap);
};

function format(text: string, delimiters: any, wrap?: number): string {
  const lines = split(text, wrap);
  const maxLength = max(lines);

  let balloon;
  if (lines.length === 1) {
    balloon = [
      " " + top(maxLength),
      delimiters.only[0] + " " + lines[0] + " " + delimiters.only[1],
      " " + bottom(maxLength),
    ];
  } else {
    balloon = [" " + top(maxLength)];

    for (let i = 0, len = lines.length; i < len; i += 1) {
      let delimiter;

      if (i === 0) {
        delimiter = delimiters.first;
      } else if (i === len - 1) {
        delimiter = delimiters.last;
      } else {
        delimiter = delimiters.middle;
      }

      balloon.push(
        delimiter[0] + " " + pad(lines[i], maxLength) + " " + delimiter[1],
      );
    }

    balloon.push(" " + bottom(maxLength));
  }

  return balloon.join("\n");
}

function split(text: string, wrap?: number): string[] {
  text = text.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, "")
    .replace(/\t/g, "        ");

  let lines = [];
  if (!wrap) {
    lines = text.split("\n");
  } else {
    let start = 0;
    while (start < text.length) {
      const nextNewLine = text.indexOf("\n", start);

      const wrapAt = Math.min(
        start + wrap,
        nextNewLine === -1 ? text.length : nextNewLine,
      );

      lines.push(text.substring(start, wrapAt));
      start = wrapAt;

      // Ignore next new line
      if (text.charAt(start) === "\n") {
        start += 1;
      }
    }
  }

  return lines;
}

function stringWidth(str: string): number {
  return str.length;
}

function max(lines: string[]): number {
  let mx = 0;
  for (let i = 0, len = lines.length; i < len; i += 1) {
    if (stringWidth(lines[i]) > mx) {
      mx = stringWidth(lines[i]);
    }
  }
  return mx;
}

function pad(text: string, length: number): string {
  return text + (new Array(length - stringWidth(text) + 1)).join(" ");
}

function top(length: number): string {
  return new Array(length + 3).join("_");
}

function bottom(length: number): string {
  return new Array(length + 3).join("-");
}

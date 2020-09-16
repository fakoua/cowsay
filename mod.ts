import * as baloon from "./src/balloon.ts";
import * as cows from "./src/cows.ts";
import { faces } from "./src/faces.ts";
import type { IOptions } from "./src/models/IOptions.ts";

export const say = (options: IOptions): string => {
  return doIt(options, true);
};

export const think = (options: IOptions): string => {
  return doIt(options, false);
};

export const list = (): string[] => {
  return cows.listSync();
};

function doIt(options: IOptions, sayAloud: boolean): string {
  let cowName;
  if (options.random) {
    const cowsList = cows.listSync();
    const nb = Math.floor(Math.random() * cowsList.length);
    cowName = cowsList[nb];
  } else {
    cowName = options.cow || "cow";
  }

  const cow = cows.get(cowName);
  const face = faces(options);
  face.thoughts = sayAloud ? "\\" : "o";

  const action: "say" | "think" = sayAloud ? "say" : "think";

  return baloon[action](
    options.text,
    options.wrap ? options.wrapLength : undefined,
  ) + "\n" + cow(face);
}

import * as cowsay from "./mod.ts";
import { assert } from "./test_deps.ts";

Deno.test({
  name: "test_cowsay_1",

  fn(): void {
    const res = cowsay.say({
      text: "Deno Is Great",
    });
    assert(res.indexOf("Deno Is Great") > 0);
  },
});

Deno.test({
  name: "test_cowsay_eyes",
  fn(): void {
    const res = cowsay.say({
      text: "Deno Is Great",
      eyes: "@@",
    });
    assert(res.indexOf("@@") > 0);
  },
});

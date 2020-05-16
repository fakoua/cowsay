import * as balloon from "./balloon.ts";
import { assert } from "../test_deps.ts";

Deno.test({
  name: "test_balloon_say_1",
  fn(): void {
    let res = balloon.say("deno", 30);
    assert(res.indexOf("deno") > 0);
  },
});

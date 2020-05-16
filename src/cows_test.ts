import * as cows from "./cows.ts";
import { assert } from "../test_deps.ts";

Deno.test({
  name: "test_cows_listSync",
  fn(): void {
    let cow = cows.listSync();
    assert(cow.indexOf("cow") > 0);
  },
});

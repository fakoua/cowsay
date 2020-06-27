import * as replacer from "./replacer.ts";
import { assertEquals } from "../test_deps.ts";

Deno.test({
  name: "test_replacer_default",

  fn(): void {
    const res = replacer.default("hi$eyeshi", { eyes: "oo" });
    assertEquals(res, "hioohi");
  },
});

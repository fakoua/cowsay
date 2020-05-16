import * as faces from "./faces.ts";
import { assertEquals } from "../test_deps.ts";

Deno.test({
  name: "test_faces_b",
  fn(): void {
    //@ts-ignore
    let res = faces.faces({ mode: 1 });
    assertEquals(res, { eyes: "==", tongue: "  " });
  },
});

import { assertEquals } from "../dev_depts.ts";
import { readTextFile, writeTextFile } from "./file-ops.ts";
import { join, resolve } from "../depts.ts";

/**
 * Resolve absolute path of asset directory
 */
const assetsDir = resolve("./assets");

/**
 * readTextFile test
 */
Deno.test({
  name: "Should return file text content.",
  async fn() {
    const text = await readTextFile(join(assetsDir, "people.json"));
    assertEquals(
      text,
      `[
  {
    "id": 1,
    "name": "Ammar Natsir",
    "age": "26"
  },
  {
    "id": 2,
    "name": "Izzuddin Natsir",
    "age": "23"
  },
  {
    "id": 3,
    "name": "Aisyah Natsir",
    "age": "19"
  }
]
`,
    );
  },
});

Deno.test({
  name: "Should write text to the specified file.",
  async fn() {
    await writeTextFile(join(assetsDir, "hello.txt"), "Hello, World!");

    assertEquals(
      await readTextFile(join(assetsDir, "hello.txt")),
      "Hello, World!",
    );
  },
});

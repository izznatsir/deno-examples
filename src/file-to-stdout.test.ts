import { fileToStdout } from "./file-to-stdout.ts";

Deno.test({
  name: "Should be able to pipe one file",
  async fn() {
    const filePaths = ["assets/hello.txt"];

    await fileToStdout(filePaths);
  },
});

Deno.test({
  name: "Should be able to pipe multiple files",
  async fn() {
    const filePaths = ["assets/hello.txt", "assets/people.json"];

    await fileToStdout(filePaths);
  },
});

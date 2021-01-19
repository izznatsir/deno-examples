import { fileToStdout } from "./file-to-stdout.ts";

async function main() {
  if (Deno.args.length === 0) {
    console.error(new Error("No file path provided."));
    Deno.exit(1);
  }

  await fileToStdout(Deno.args);
}

main();

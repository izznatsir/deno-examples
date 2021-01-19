/**
 * Read file
 */
export async function readTextFile(filePath: string) {
  try {
    return await Deno.readTextFile(filePath);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("");
      console.error("Error: " + error.name);
      console.error(error.message);
    }
  }
}

/**
 * Write file
 */
export async function writeTextFile(filePath: string, text: string) {
  try {
    await Deno.writeTextFile(filePath, text);

    console.log("Text written to 'hello.txt' file in 'assets' directory.");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("");
      console.error("Error: " + error.name);
      console.error(error.message);
    }
  }
}

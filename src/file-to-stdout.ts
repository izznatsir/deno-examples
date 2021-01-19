export async function fileToStdout(filePaths: string[]) {
  for (const filePath of filePaths) {
    const file = await Deno.open(filePath);
    console.log("");
    await Deno.copy(file, Deno.stdout);
    console.log("");

    file.close();
  }
}

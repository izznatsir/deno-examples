export function outputB() {
   console.log("Module's B import.meta.url: ", import.meta.url)
   console.log("Main module: ", Deno.mainModule)
   console.log(
      "Is module B the main module in current process? ", import.meta.main
   )
}
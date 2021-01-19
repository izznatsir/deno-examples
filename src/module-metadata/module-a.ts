import {outputB} from './module-b.ts'

function outputA() {
   console.log("Module's A import.meta.url: ", import.meta.url)
   console.log("Main module: ", Deno.mainModule)
   console.log(
      "Is module A the main module in the current process? ", import.meta.main
   )
}

outputA()
console.log("")
outputB()
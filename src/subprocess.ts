/**
 * Enclosed subprocess (not communicating with other subprocess or main process)
 */
const sp1 = Deno.run({
   cmd: ["echo", "hello"]
})

await sp1.status()

/**
 * Open subprocess (communicating with other subprocess or main process).
 * It communicate by piping its stdout and stderr so it can be accessed through .output() or .stderrOutput() method of subprocess.
 */
const fileNames = Deno.args
const sp2 = Deno.run({
   cmd: [
      "deno",
      "run",
      "--allow-read",
      "https://deno.land/std@0.83.0/examples/cat.ts",
      ...fileNames
   ],
   stdout: "piped",
   stderr: "piped"
})

const {code} = await sp2.status()

if (code === 0) {
   const rawOutput = await sp2.output()
   await Deno.stdout.write(rawOutput)
} else {
   const rawError = await sp2.stderrOutput()
   const errorString = new TextDecoder().decode(rawError)
   console.log(errorString)
}

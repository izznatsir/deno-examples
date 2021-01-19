console.log("Press Ctrl-C to trigger a SIGINT signal");

/**
 * async-iterator signal handler
 */
// for await (const _ of Deno.signal(Deno.Signal.SIGINT)) {
//    console.log('\ninterrupted')
//    Deno.exit()
// }

/**
 * promise signal handler
 */
// await Deno.signal(Deno.Signal.SIGINT)
// console.log('\ninterrupted')
// Deno.exit()

/**
 * Stop watching signal. If no signal is being watched, deno will automatically exit.
 */
const sig = Deno.signal(Deno.Signal.SIGINT)
setTimeout(() => {
   sig.dispose()
}, 3000)

for await (const _ of sig) {
   console.log('\ninterrupted')
   Deno.exit()
}
const watcher = Deno.watchFs("./assets")

for await (const event of watcher) {
   console.log(`>>>> event`, event)
}

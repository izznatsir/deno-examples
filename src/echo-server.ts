const listener = Deno.listen({
   hostname: '0.0.0.0',
   port: 8080
})
console.log("listening on 0.0.0.0:8080");

for await (const conn of listener) {
   Deno.copy(conn, conn)
}
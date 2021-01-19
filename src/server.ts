import {serve} from  '../depts.ts'

const server = serve({
   hostname: '0.0.0.0',
   port: 8080
})
console.log(`HTTP server is running.  Access it at:  http://localhost:8080/`);

for await (const request of server) {
   let body = "Your user agent is:\n\n"

   body += request.headers.get('user-agent') || 'Unknown'

   request.respond({
      body
   })
}
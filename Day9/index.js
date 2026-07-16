const http = require("https")

const myServer = http.createServer((req,res)=>{
    console.log("Hello");
    res.end("Hello Students");
})

myServer.listen(8000, ()=>{
    console.log("Server Started.");
})
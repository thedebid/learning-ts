import * as http from "http";

http.createServer((request,response)=>{
    response.end("Hello World");
})
.listen(3000,()=>console.log("Server Started."))

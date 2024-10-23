const express = require("express")
const http = require("http")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors)


server.listen(8081,()=>{
    console.log("Servidor rodando a todo vapor : http://localhost:8081");
    
})

const express= require('express')
const cors=require('cors')
const port=process.env.PORT||3000
require("./src/db/index")

const route=require("./src/route/route")

const app=express()

//body-parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//middleware
app.use(cors())

app.use(route)

//server

app.listen(port,()=>{
    console.log(`https://localhost:${port}`)
})
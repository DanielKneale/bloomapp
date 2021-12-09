const dotenv = require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 9000
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

app.use("/api/*", (req,res) =>{
    res.json({ data: "api data SERVED" })
})

app.use("*",(req,res) => {
    res.sendFile(path.join(__dirname,"client/build","index.html"))
})

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})





// console.log("it works")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME) //environment variables
// console.log(process.env.APIKEY)
// console.log(process.env.PORT)
// console.log(process.env.DBPASS)
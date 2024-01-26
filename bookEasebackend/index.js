const express=require("express")
const {connect}=require("./mongoos.js")
let {userroute}=require("./route/Userroute.js")
let {router}=require("./route/bcroute.js")
let {obroute}=require("./route/obroute.js")
const app=express();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Hello World")
})
app.use(userroute)
app.use(router)
app.use(obroute)

app.listen(8080,async()=>{
    try {
        await connect
        console.log("connected to mongo")
    } catch (error) {
        console.log(error)
    }
    console.log("connected to port 8080")
})

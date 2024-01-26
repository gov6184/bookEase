let express=require("express")
let obroute=express.Router()
let {obmodal}=require("../modal/obmodal")
obroute.get("/obs",async(req,res)=>{
    let val=await obmodal.find()
    console.log(val)
    res.send(val)
})
obroute.post("/obs/create",async(req,res)=>{
    
    let val=req.body
    let nn=new obmodal(val)
    await nn.save()
    res.send("done")
})


obroute.delete("/obs/:obid",(req,res)=>{
  
})
module.exports={
    obroute
}
let mong=require("mongoose")
let obmodal=new mong.model("Onlinebook",mong.Schema({
  book_id:{type:String, required:true},
  bookName:{type:String, required:true},
  bookpdf:{type:String, required:true}
}))
module.exports={
    obmodal
}
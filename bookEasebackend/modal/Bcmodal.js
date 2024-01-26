let mong=require("mongoose")
let bcmodal=new mong.model("Bookcollection",mong.Schema({
    book_id: { type: String, required: true, unique: true },
    ownerName: { type: String, required: true },
    availableFor: { type: String, enum: ['rent', 'both', 'sell'] },
    bookInfo: {
      bookImage: { type: String, required: true },
      bookTitle: { type: String, required: true },
      bookAuthor: { type: String, required: true },
      bookPublisher: { type: String, required: true },
      bookRentPrice: { type: String, required: true },
      bookbuyPrice:{type:String},
      bookDescription: { type: String, required: true },
      Genre: { type: String, required: true },
    },
    bookQualityRating: { type: Number, min: 1, max: 5 },
}))
module.exports={
    bcmodal
}
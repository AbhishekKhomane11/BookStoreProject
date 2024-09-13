import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name :String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Book = mongoose.model("Book",bookSchema);
// data that come in bookschema will store in book
export default Book;
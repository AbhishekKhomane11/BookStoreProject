import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


import bookRoute from "./route/book.route.js";
dotenv.config();

const app = express();

app.use(express.json());



const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

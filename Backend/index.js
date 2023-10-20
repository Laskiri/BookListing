import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './Routes/booksRoute.js';
import cors from 'cors';




const app = express();

// Middleware for handling json data
app.use(express.json());

// Middleware for handling cors policy
app.use(cors());
/* app.use(cors({
    origin: "https://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
})); */


app.get('/', (req, res) => {
    res.status(234).send("Hello World!");
})

app.use('/books', booksRoute);






mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
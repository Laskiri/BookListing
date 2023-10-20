import express from 'express';
import { Book } from '../models/bookModel.js';
const router = express.Router();

// Get all books from database
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});
// Get a book by id from the database
router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const book = await Book.findById(id);
        res.status(200).json(book);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

// Create a book in the database
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Missing required data" })
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await Book.create(newBook);
        res.status(201).send(book); n
    }
    catch (err) {
        console.log(err.message);
        response.status(500).send({ message: error.message });
    }
})
// Updating a book in the database
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Missing required data" })
        }

        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body)
        if (!result) {
            return res.status(404).send({ message: "Book not found" })
        }
        res.status(200).send({ message: "Book updated successfully" })
    }
    catch {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});
// deleting a book from the database

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).send({ message: "Book not found" })
        }
        res.status(200).send({ message: "Book deleted successfully" })
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

export default router;
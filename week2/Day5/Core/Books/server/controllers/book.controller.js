import Book from "../models/book.model.js";

// create a book 
async function createBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function getAllBooks(req, res) {
    try {
        const allBooks = await Book.find();
        res.json(allBooks);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function getOneBook(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(400).json(error);
    }
}


async function updateBook(req, res) {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body,
            { new: true, runValidators: true}
        );
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function deleteBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createBook, getAllBooks, getOneBook, updateBook, deleteBook };
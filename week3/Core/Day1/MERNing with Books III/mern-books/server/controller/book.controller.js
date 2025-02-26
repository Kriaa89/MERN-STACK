import Book from "../model/book.model.js";

// Create a new book
async function CreateBook(req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Get all books

async function getAllBooks(req, res) {
    try {
        const allBooks = await Book.find();
        res.json(allBooks);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Get one Book
async function getOneBook(req, res) {
    try {
        const book = await Book.findById(req.params.id)
        res.json(book);
    } catch (error) {
        res.status(400).json(error);
    }
}

// delete book 
async function  deleteBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Update book
async function updateBook(req, res) {
    try {
        const updateBook = await book.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
        res.json(updateBook);
    } catch (error) {
        res.status(400).json(error);
    }
}
export { CreateBook, getAllBooks, getOneBook, deleteBook, updateBook};
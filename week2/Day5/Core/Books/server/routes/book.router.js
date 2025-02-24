import { Router } from 'express';
import { createBook, getAllBooks, getOneBook, updateBook, deleteBook} from '../controllers/book.controller.js';



const router = Router();

router.post('/books', createBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getOneBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);


export default router;


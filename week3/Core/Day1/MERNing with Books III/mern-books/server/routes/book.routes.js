import { Router } from 'express';
import {  CreateBook, getAllBooks, getOneBook, deleteBook} from '../controller/book.controller.js';

const router = Router();

router.post('/book', CreateBook);
router.get('/book', getAllBooks);
router.get('/book/:id', getOneBook);
router.delete('/book/:id', deleteBook);

export default router;
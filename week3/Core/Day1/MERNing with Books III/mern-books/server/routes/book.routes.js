import { Router } from 'express';
import {  CreateBook, getAllBooks, getOneBook, deleteBook, updateBook} from '../controller/book.controller.js';

const router = Router();

router.post('/', CreateBook);
router.get('/', getAllBooks);
router.get('/:id', getOneBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
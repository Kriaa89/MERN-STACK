import { Router } from 'express';
import {  getAllShows, getShowById, deleteShow, updateShow } from '../controllers/conTv.js';

const router = Router();

router.get("/shows", getAllShows);
router.get("/shows/year/:year", getShowById);
router.delete("/shows/:title", deleteShow);
router.patch("/shows/:title", updateShow);

export default router;

// http://localhost:8000/api/shows
// http://localhost:8000/api/shows/year/2019
// http://localhost:8000/api/shows/Breaking Bad
// http://localhost:8000/api/shows/The Office
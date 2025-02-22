import { Router } from 'express';
import {  getAllShows, getShowById, deleteShow, updateShow } from '../controllers/conTv';

const router = Router();

router.get("/shows", getAllShows);
router.get("/shows/year/:year", getShowById);
router.delete("/shows/title/:title", deleteShow);
router.patch("/shows/title/:title", updateShow);

export default router;
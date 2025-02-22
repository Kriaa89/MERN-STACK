import { Router } from 'express';
import {  getAllShows, getShowById, deleteShow, updateShow } from '../controllers/conTv.js';

const router = Router();

router.get("/shows", getAllShows);
router.get("/shows/year/:year", getShowById);
router.delete("/shows/:title", deleteShow);
router.patch("/shows/:title", updateShow);

export default router;
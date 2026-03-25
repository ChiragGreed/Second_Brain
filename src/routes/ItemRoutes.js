import express from 'express';
import { saveItem } from '../controllers/ItemControllers.js';

const ItemRouter = express.Router();

ItemRouter.post('/save', saveItem);


export default ItemRouter;


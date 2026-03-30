import express from 'express';
import { saveItem, getItems, getRelatedItems, semanticSearchItems, getSingleItem } from '../controllers/itemControllers.js';

const ItemRouter = express.Router();

ItemRouter.post('/save', saveItem);

ItemRouter.get('/getItems', getItems);

ItemRouter.get("/searchItems", semanticSearchItems);

ItemRouter.get('/getRelatedItems/:itemId', getRelatedItems);

ItemRouter.get('/:itemId', getSingleItem);



export default ItemRouter;


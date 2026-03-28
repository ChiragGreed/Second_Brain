import express from 'express';
import { getCollectionItems, getCollections } from '../controllers/collectionController.js';

const CollectionRouter = express.Router();

CollectionRouter.get('/getCollections', getCollections);

CollectionRouter.get('/:collectionId/items',getCollectionItems);

export default CollectionRouter;

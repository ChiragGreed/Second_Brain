import express from 'express';
import { getKnowledgeGraph } from '../controllers/GraphController.js';


const GraphRouter = express.Router();

GraphRouter.get('/getGraph', getKnowledgeGraph);


export default GraphRouter;

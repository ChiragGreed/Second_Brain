import express from 'express';
import { setWildCard } from '../controllers/wildCardController.js';

const IntegrationRouter = express.Router();

IntegrationRouter.get('*name', setWildCard);


export default IntegrationRouter;

import express from 'express';
import { Protected, register } from '../controllers/authControllers.js';
import { login } from '../controllers/authControllers.js';
import validateUser from '../Middlewares/authMiddlewares/validateUser.js';

const authRoutes = express.Router();

authRoutes.post('/register', register);
authRoutes.post('/login', login);
authRoutes.get('/protected', validateUser, Protected);


export default authRoutes;

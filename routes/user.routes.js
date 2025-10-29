import express from 'express';
const userRouter = express.Router();

import { signUp, signIn } from '../controllers/user.controller.js';

userRouter.post('/signup', signUp);

userRouter.post('/login', signIn);

export default userRouter;

import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import {
	addSubscription,
	getSubscriptions,
} from '../controllers/subscription.controller.js';

const subscriptionsRouter = express.Router();

subscriptionsRouter.use(authMiddleware);

subscriptionsRouter.post('/', addSubscription);
subscriptionsRouter.get('/', getSubscriptions);

export default subscriptionsRouter;

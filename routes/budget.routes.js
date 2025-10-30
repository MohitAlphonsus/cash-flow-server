import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import {
	addBudget,
	getAllBudgets,
	getBudgetByMonth,
} from '../controllers/budget.controller.js';

const budgetRouter = express.Router();

budgetRouter.use(authMiddleware);

budgetRouter.post('/', addBudget);
budgetRouter.get('/', getAllBudgets);
budgetRouter.get('/:month', getBudgetByMonth);

export default budgetRouter;

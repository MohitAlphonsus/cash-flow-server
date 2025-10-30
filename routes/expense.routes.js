import express from 'express';
import {
	addExpense,
	getExpenses,
	editExpense,
	deleteExpense,
} from '../controllers/expense.controller.js';

import authMiddleware from '../middleware/auth.middleware.js';

const expenseRouter = express.Router();

expenseRouter.use(authMiddleware);

expenseRouter.post('/', addExpense);
expenseRouter.get('/', getExpenses);
expenseRouter.put('/:id', editExpense);
expenseRouter.delete('/:id', deleteExpense);

export default expenseRouter;

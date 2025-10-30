import express from 'express';
import { config } from 'dotenv';
import connectDatabase from './config/db.js';
import userRouter from './routes/user.routes.js';
import expenseRouter from './routes/expense.routes.js';
import budgetRouter from './routes/budget.routes.js';
config({ path: './config/.env' });

const port = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
	res.send('WELCOME TO EXPENSE TRACKER API');
});

app.use('/api/users', userRouter);
app.use('/api/expenses', expenseRouter);
app.use('/api/budgets', budgetRouter);

async function startServer() {
	await connectDatabase();
	app.listen(port, () => {
		console.log(`Server started at localhost ${port}`);
	});
}

startServer();

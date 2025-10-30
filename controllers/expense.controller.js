import Expense from '../models/expense.model.js';

async function addExpense(req, res) {
	try {
		if (!req.user || !req.user._id)
			return res.status(401).json({ error: 'Unauthorized' });
		const { category, amount, date, description } = req.body;
		const expense = await Expense.create({
			userId: req.user._id,
			category,
			amount,
			date,
			description,
		});
		res.status(201).json({ expense });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function getExpenses(req, res) {
	try {
		const expenses = await Expense.find({ userId: req.user._id });
		res.status(200).json({ expenses });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function editExpense(req, res) {
	try {
		const { id } = req.params;
		const { category, amount, date, description } = req.body;
		const expense = await Expense.findOneAndUpdate(
			{
				userId: req.user._id,
				_id: id,
			},
			{
				category,
				amount,
				date,
				description,
			},
			{
				new: true,
			},
		);
		res.status(200).json({ expense });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function deleteExpense(req, res) {
	try {
		const { id } = req.params;
		const expense = await Expense.findOneAndDelete({
			userId: req.user._id,
			_id: id,
		});
		res.status(200).json({ message: 'Expense deleted', expense });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export { addExpense, getExpenses, editExpense, deleteExpense };

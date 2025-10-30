import Budget from '../models/budget.model.js';

async function addBudget(req, res) {
	try {
		if (!req.user || !req.user._id)
			return res.status(401).json({ error: 'Unauthorized' });
		const { month, totalBudget } = req.body;

		const doesBudgetExists = await Budget.findOne({
			userId: req.user._id,
			month,
		});

		if (doesBudgetExists) {
			return res.status(400).json({
				error: `Budget for ${month} already exists.`,
			});
		}

		const budget = await Budget.create({
			userId: req.user._id,
			month,
			totalBudget,
		});
		res.status(201).json({ budget });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function getAllBudgets(req, res) {
	try {
		const budgets = await Budget.find({ userId: req.user._id });
		res.status(200).json({ budgets });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function getBudgetByMonth(req, res) {
	try {
		const { month } = req.params;
		const budget = await Budget.findOne({ userId: req.user._id, month: month });
		if (!budget) return res.status(404).json({ error: 'Budget not found' });
		res.status(200).json({ budget });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export { addBudget, getAllBudgets, getBudgetByMonth };

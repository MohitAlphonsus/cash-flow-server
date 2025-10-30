import mongoose from 'mongoose';

const BudgetSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		month: {
			type: String,
			required: true,
		},
		totalBudget: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true },
);

BudgetSchema.index({ userId: 1, month: 1 }, { unique: true });

const Budget = mongoose.model('Budget', BudgetSchema);
export default Budget;

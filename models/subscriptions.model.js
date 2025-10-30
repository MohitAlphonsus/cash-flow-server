import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		name: { type: String, required: true },
		amount: { type: Number, required: true },
		frequency: {
			type: String,
			enum: ['monthly', 'yearly'],
			default: 'monthly',
		},
		active: { type: Boolean, default: true },
		note: { type: String },
	},
	{ timestamps: true },
);

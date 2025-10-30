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
		renewalDate: { type: Date, required: true },
		frequency: {
			type: String,
			enum: ['monthly', 'yearly'],
			default: 'monthly',
		},
		status: { type: String, enum: ['active', 'inactive'], default: 'active' },
		note: { type: String },
	},
	{ timestamps: true },
);

const Subscription = mongoose.model('Subscription', SubscriptionSchema);
export default Subscription;

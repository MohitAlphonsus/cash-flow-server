import Subscription from '../models/subscriptions.model.js';

async function addSubscription(req, res) {
	try {
		if (!req.user || !req.user._id)
			return res.status(401).json({ error: 'Unauthorized' });
		const { name, amount, frequency, renewalDate, status, note } = req.body;
		const subscription = await Subscription.create({
			userId: req.user._id,
			name,
			amount,
			frequency,
			renewalDate,
			status,
			note,
		});
		res.status(201).json({ subscription });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function getSubscriptions(req, res) {
	try {
		const subscriptions = await Subscription.find({ userId: req.user._id });
		res.status(200).json({ subscriptions });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export { addSubscription, getSubscriptions };

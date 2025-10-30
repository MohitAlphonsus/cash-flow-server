import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

async function authMiddleware(req, res, next) {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
			req.user = await User.findById(decoded.userId).select('_id');
			next();
		} catch (err) {
			res.status(401).json({ error: err.message });
		}
	} else {
		res.status(401).json({ error: 'Unauthorized' });
	}
}

export default authMiddleware;

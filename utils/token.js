import jwt from 'jsonwebtoken';

function generateToken(userId) {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
		expiresIn: '1d',
	});
	return token;
}

export default generateToken;

import generateToken from '../utils/token.js';
import User from '../models/user.model.js';

async function signUp(req, res) {
	try {
		const { name, email, password } = req.body;
		const hashedPassword = await User.signup(password);
		const user = await User.create({ name, email, password: hashedPassword });
		res.status(201).json({ user });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

async function signIn(req, res) {
	try {
		const { email, password } = req.body;
		const user = await User.login(email, password);

		const token = generateToken(user._id);
		res.status(200).json({ user, token });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

export { signUp, signIn };

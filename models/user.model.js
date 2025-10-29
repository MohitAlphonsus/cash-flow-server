import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

UserSchema.statics.signup = async function (password) {
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);
	return hash;
};

UserSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });
	if (!user) {
		throw new Error('User not found');
	}

	const doesPasswordMatch = await bcrypt.compare(password, user.password);
	if (!doesPasswordMatch) {
		throw new Error('Password does not match');
	}

	return user;
};

const User = mongoose.model('User', UserSchema);

export default User;

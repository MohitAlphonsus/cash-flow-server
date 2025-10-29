import mongoose from 'mongoose';

function connectDatabase() {
	mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('Database connected'))
		.catch(err => console.log(err));
}

export default connectDatabase;

import mongoose from 'mongoose';
import connectConfig from '../config/dbConnection';


const dbConnection = async () => {
	try {
		mongoose.connect(connectConfig.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			autoIndex: false,
			useFindAndModify: false
		});
	} catch (error) {
		console.log(error.message);
		process.exit(1)
	}
}

export default dbConnection;

import mongoose from 'mongoose';
import appSettings from './config';

const dbConnect = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };

    await mongoose.connect(appSettings.dbConnection, options);

    return true;
  } catch (ex) {
    return {
      error: ex,
    };
  }
};

export { dbConnect };

import mongoose from "mongoose";
import Log from "../util/log";

const mongoUri = String(process.env.MONGO_URL);

export default () => {
  mongoose
    .connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => Log.dev(`mongo connected... ${mongoUri}`))
    .catch(Log.error);
};

export const closeDb = () => mongoose.disconnect();

import mongoose from "mongoose";

const mongoUri = String(process.env.MONGO_URL);

export default () => {
  mongoose
    .connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(
      () => process.env.IS_DEV && console.log("mongo connected...", mongoUri)
    )
    .catch(console.log);
};

export const closeDb = () => mongoose.disconnect();

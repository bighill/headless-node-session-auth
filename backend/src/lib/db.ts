import mongoose from "mongoose";

const mongoUri = String(process.env.MONGO_URL);

mongoose
  .connect(mongoUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(
    () =>
      process.env.NODE_ENV === "development" &&
      console.log(`mongo connected at ${mongoUri}`)
  )
  .catch(console.log);

export default mongoose;

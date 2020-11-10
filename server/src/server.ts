import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import { default as connectMongo } from "connect-mongo";

import passport from "./passport";
import securedMW from "./middleware/securedMW";
import devMW from "./middleware/devMW";
import auth from "./routes/auth";
import api from "./routes/api";
import catchall from "./routes/catchall";

// TODO : tests that mock express requests (req, res)

const app = express();
const port = String(process.env.SERVER_PORT);
const MongoStore = connectMongo(session);
const mongoUri = String(process.env.MONGO_URI);

mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`mongo connected at ${mongoUri}`))
  .catch(console.log);

app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: "use a better secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (app.get("env") === "development") {
  app.use(devMW);
}

app.use("/auth", auth);
app.use("/api", securedMW, api);
app.use("*", catchall);

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});

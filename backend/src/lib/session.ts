import session from "express-session";
import { default as connectMongo } from "connect-mongo";
import db from "./mongodb";

const MongoStore = connectMongo(session);

const s = session({
  store: new MongoStore({ mongooseConnection: db.connection }),
  secret: "cdc722f09b746bd818f8b6c4d53796e846137a6b13b703d64a9f60ca619d1fa9",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === "production",
  },
});

export default s;

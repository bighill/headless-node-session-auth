import session from "express-session";
import connectRedis from "connect-redis";
import redisdb from "./redisdb";

const RedisStore = connectRedis(session);

const s = session({
  store: new RedisStore({ client: redisdb }),
  secret: "cdc722f09b746bd818f8b6c4d53796e846137a6b13b703d64a9f60ca619d1fa9",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === "production",
  },
});

export default s;

import session from "express-session";
// import { default as connectMongo } from "connect-mongo";
// import db from "./mongodb";
import redis from "redis";
import connectRedis from "connect-redis";

// const MongoStore = connectMongo(session);
const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
});

const s = session({
  // store: new MongoStore({ mongooseConnection: db.connection }),
  store: new RedisStore({ client: redisClient }),
  secret: "cdc722f09b746bd818f8b6c4d53796e846137a6b13b703d64a9f60ca619d1fa9",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === "production",
  },
});

export default s;

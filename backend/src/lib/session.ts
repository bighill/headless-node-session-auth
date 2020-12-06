import session from "express-session";
import connectRedis from "connect-redis";
import redisdb from "./redisdb";

const RedisStore = connectRedis(session);

const s = session({
  store: new RedisStore({ client: redisdb }),
  secret: String(process.env.SESSION_SECRET),
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === "production",
  },
});

export default s;

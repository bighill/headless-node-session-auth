import redis from "redis";

const host = process.env.REDIS_HOST;
const port = Number(process.env.REDIS_PORT);

const r = redis.createClient({ host, port });

r.on(
  "connect",
  () =>
    process.env.IS_DEV && console.log("redis connected...", `${host}:${port}`)
);

export default r;

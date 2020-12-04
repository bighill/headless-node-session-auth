import redis from "redis";
import Log from "../util/log";

const host = process.env.REDIS_HOST;
const port = Number(process.env.REDIS_PORT);

const r = redis.createClient({ host, port });

r.on("connect", () => Log.dev(`redis connected... ${host}:${port}`));
r.on("error", Log.error);

export default r;

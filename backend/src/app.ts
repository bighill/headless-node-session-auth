import express from "express";
import session from "./lib/session";
import passport from "./lib/passport";
import securedMW from "./middleware/securedMW";
import devMW from "./middleware/devMW";
import auth from "./routes/auth";
import api from "./routes/api";
import catchall from "./routes/catchall";
import mongdb from "./lib/mongodb";

mongdb();

const app = express();
app.set("port", process.env.SERVER_PORT || "4444");

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(devMW);

app.use("/auth", auth);
app.use("/api", securedMW, api);
app.use("*", catchall);

export default app;

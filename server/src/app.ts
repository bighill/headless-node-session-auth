import express from "express";
import cors from "cors";
import session from "./lib/session";
import passport from "./lib/passport";
import securedMW from "./middleware/securedMW";
import devMW from "./middleware/devMW";
import auth from "./routes/auth";
import api from "./routes/api";
import catchall from "./routes/catchall";

const app = express();
app.set("port", String(process.env.SERVER_PORT));

app.use(cors());
app.use(session);
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

export default app;

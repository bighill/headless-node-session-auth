import express from "express";
import passport from "passport";
const router = express.Router();

import Reply from "../util/globalReply";

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      const reply = Reply({
        error: err,
        message: "Bad request",
      });
      return res.status(400).send(reply);
    }
    if (!user) {
      const reply = Reply({ message: "Unauthorized" });
      return res.status(401).send(reply);
    }
    req.logIn(user, (err) => {
      if (err) {
        const reply = Reply({
          error: err,
          message: "Bad request",
        });
        return res.status(400).send(reply);
      }
      const reply = Reply({ message: "Login was successful" });
      return res.send(reply);
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  const reply = Reply({ message: "Logout was successful" });
  res.send(reply);
});

export default router;

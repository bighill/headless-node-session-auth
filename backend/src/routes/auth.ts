import express from "express";
import bcrypt from "bcrypt";
import { User } from "../model";
import passport from "passport";
const router = express.Router();

import Reply from "../util/globalReply";

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
          return res.send(
            Reply({
              message: "Registration is complete",
              data: { _id: user._id, email: user.email },
            })
          );
        })
        .catch((err) => {
          if (err.code === 11000) {
            return res.status(400).send(
              Reply({
                message: "Registration failed",
                error: "Email user already exists",
              })
            );
          }
          return res.status(500).send(
            Reply({
              message: "Registration failed",
              error: "An internal error has occurred",
            })
          );
        });
    });
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).send(
        Reply({
          message: "Login failed",
          error: "An internal error has occurred",
        })
      );
    }
    if (!user) {
      return res
        .status(401)
        .send(Reply({ message: "Login failed", error: "Invalid credentials" }));
    }
    req.logIn(user, (err) => {
      if (err) {
        return res
          .status(400)
          .send(
            Reply({ message: "Login failed", error: "Invalid credentials" })
          );
      }
      return res.send(
        Reply({
          message: "Login was successful",
          data: { _id: user._id, email: user.email },
        })
      );
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send(Reply({ message: "Logout was successful" }));
});

export default router;

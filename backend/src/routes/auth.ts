import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import Valid from "../util/validate";
import passport from "passport";
const router = express.Router();

import Reply from "../util/globalReply";

/*
 * Register
 */
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!Valid.credentials({ email, password })) {
    /* Invalid email and/or password */
    return res.status(400).send(
      Reply({
        message:
          "Registration failed (Email must be valid & Password must be at least 8 characters)",
        error: "Bad Request",
      })
    );
  }

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
          /* Registration is successful */
          return res.send(
            Reply({
              message: "Registration is complete",
              data: { _id: user._id, email: user.email },
            })
          );
        })
        .catch((err) => {
          if (err.code === 11000) {
            /* Code 11000 is Mongo duplicate key error */
            return res.status(400).send(
              Reply({
                message: "Registration failed",
                error: "Email user already exists",
              })
            );
          }
          console.log(err);
          return res.status(500).send(
            Reply({
              message: "Registration failed",
              error: "Internal Error",
            })
          );
        });
    });
  });
});

/*
 * Login
 */
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).send(
        Reply({
          message: "Login failed",
          error: "Internal Error",
        })
      );
    }
    if (!user) {
      /* User does not exist */
      return res
        .status(401)
        .send(Reply({ message: "Login failed", error: "Invalid credentials" }));
    }
    req.logIn(user, (err) => {
      if (err) {
        /* Authentication failed */
        return res
          .status(401)
          .send(
            Reply({ message: "Login failed", error: "Invalid credentials" })
          );
      }
      /* Authentication was successful */
      return res.send(
        Reply({
          message: "Login was successful",
          data: { _id: user._id, email: user.email },
        })
      );
    });
  })(req, res, next);
});

/*
 * Logout
 */
router.get("/logout", (req, res) => {
  req.logout();
  res.send(Reply({ message: "Logout was successful" }));
});

export default router;

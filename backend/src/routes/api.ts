import express from "express";
const router = express.Router();

import { User } from "../models/user";
import Reply from "../util/globalReply";

router.get("/test", (req, res) => {
  return res.send(Reply({ message: "API test" }));
});

router.get("/user", (req, res) => {
  Reply({ message: "User" });

  // const id = req.session?.passport.user;
  // User.findOne({ _id: id }).then((user) => {
  //   return res.send(
  //     Reply({ message: "User", data: { _id: user?._id, email: user?.email } })
  //   );
  // });
});

export default router;

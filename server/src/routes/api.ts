import express from "express";
const router = express.Router();

import Reply from "../util/globalReply";

router.get("/test", (req, res) => {
  const reply = Reply({ message: "API test" });
  return res.send(reply);
});

export default router;

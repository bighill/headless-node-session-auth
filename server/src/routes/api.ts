import express from "express";
const router = express.Router();

import Reply from "../util/globalReply";

router.get("/test/", (req, res) => {
  const reply = Reply({
    request: req,
    message: "API test",
  });
  res.send(reply);
});

export default router;

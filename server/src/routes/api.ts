import express from "express";
const router = express.Router();

import Reply from "../util/globalReply";

router.get("/test", (req, res) => {
  return res.send(Reply({ message: "API test" }));
});

export default router;

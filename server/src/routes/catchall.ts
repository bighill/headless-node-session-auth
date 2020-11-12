import express, { Request, Response } from "express";
const router = express.Router();

import Reply from "../util/globalReply";

const catchAllMessage = (req: Request, res: Response) => {
  const reply = Reply({ message: "Not found" });
  res.status(404).send(reply);
};

router.get("*", (req, res) => catchAllMessage(req, res));
router.post("*", (req, res) => catchAllMessage(req, res));

export default router;

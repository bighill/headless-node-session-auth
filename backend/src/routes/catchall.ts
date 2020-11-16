import express, { Request, Response } from "express";
const router = express.Router();

import Reply from "../util/globalReply";

const catchAllMessage = (req: Request, res: Response) => {
  return res.status(404).send(Reply({ message: "Not found" }));
};

router.get("*", (req, res) => catchAllMessage(req, res));
router.post("*", (req, res) => catchAllMessage(req, res));

export default router;

import { Request, Response, NextFunction } from "express";

import Reply from "../util/globalReply";

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res
    .status(401)
    .send(Reply({ message: "Access is denied", error: "Unauthorized" }));
};

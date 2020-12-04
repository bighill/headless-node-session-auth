import { Request, Response, NextFunction } from "express";

import Reply from "../util/globalReply";

export default (req: Request, res: Response, next: NextFunction) => {
  console.log("securedMW");
  if (req.isAuthenticated()) {
    console.log("securedMW: is auth");
    return next();
  }
  console.log("securedMW: is NOT auth");
  return res
    .status(401)
    .send(Reply({ message: "Access is denied", error: "Unauthorized" }));
};

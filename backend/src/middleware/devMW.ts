import { Request, Response, NextFunction } from "express";
import Log from "../util/log";

export default (req: Request, res: Response, next: NextFunction) => {
  Log.dev(`${req.method} ${req.originalUrl}`);
  next();
};

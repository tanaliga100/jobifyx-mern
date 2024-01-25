import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const DASHBOARD = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(StatusCodes.OK).json({
    msg: "DASHBOARD",
  });
};

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Error } from "mongoose";
import { AppError } from "../errors/customErrors";

export const errorHandlerMiddleware = (
  err: any | Error,
  res: Response,
  req: Request,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: "something went wrong from error middleware",
    });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: "Error Catched !",
  });
};

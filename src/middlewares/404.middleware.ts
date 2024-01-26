import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const notFoundMiddleware = (
  err: Error | any,
  res: Response,
  req: Request,
  next: NextFunction
) => {
  res.status(StatusCodes.NOT_FOUND).send(
    `<h1>Route Doesnt Exist</h1>
  <a href="/">Go Back</a>`
  );
};

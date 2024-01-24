import { NextFunction, Request, Response } from "express";
import { UnAuthenticatedError } from "../errors/customErrors";

export const authenticateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  //  CHECK IF THERE IS A COOKIE ATTACH THEN RETURN IF TRUE
  console.log("auth middleware", req.cookies);
  const { token } = req.cookies;
  if (!token) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  next();
};

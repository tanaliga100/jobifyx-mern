import { NextFunction, Request, Response } from "express";
import { UnAuthenticatedError } from "../errors/customErrors";

export const authenticateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //  CHECK IF THERE IS A COOKIE ATTACH THEN RETURN IF TRUE
  const { token } = req.cookies;
  console.log("CURRENT_TOKEN", token);
  if (!token) {
    throw new UnAuthenticatedError("Authentication Failed || No Token");
  }
  next();
  // IF THE TOKEN IS PRESENT THEN VERIFY
  // try {
  //   const user = verifyJWT(token);
  //   if (!user) {
  //     throw new UnAuthenticatedError("Authentication Invalid");
  //   }
  //   console.log("verified", user);

  //   next();
  // } catch (error) {
  //   throw new UnAuthenticatedError("Authentication Invalid");
  // }
};

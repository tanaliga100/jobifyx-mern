import { NextFunction, Response } from "express";
import { UnAuthenticatedError } from "../errors/customErrors";
import { AuthenticatedRequest } from "../utils/constants";
import { verifyJWT } from "../utils/tokenUtils";

export const authenticateMiddleware = async (
  req: AuthenticatedRequest | any,
  res: Response,
  next: NextFunction
) => {
  //  CHECK IF THERE IS A COOKIE ATTACHED
  const { token } = req.cookies;
  console.log("CURRENT_TOKEN", token);
  if (!token) {
    throw new UnAuthenticatedError("Authentication Failed || No Token");
  }
  // IF THE TOKEN IS PRESENT THEN VERIFY
  try {
    const { userId, role } = verifyJWT(token) as {
      userId: string;
      role: string;
    };
    if (!userId) {
      throw new UnAuthenticatedError("Authentication Invalid");
    }
    // attach payload
    req.user = { userId, role, test: "test" };

    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

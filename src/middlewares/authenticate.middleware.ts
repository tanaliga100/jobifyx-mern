import { NextFunction, Response } from "express";
import {
  BadRequestError,
  UnAthorizedError,
  UnAuthenticatedError,
} from "../errors/customErrors";
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
    //  CHECK IF THE TEST USER IS LOGGING IN
    const testUser = userId === "65e02809d264875cb8a5a983";
    // attach payload
    req.user = { userId, role, testUser };

    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
};

export const authorizedPermissions = (roles: string[]) => {
  return (req: any, any: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      throw new UnAthorizedError("Restricted Route || ADMIN ONLY");
    }
    next();
  };
};

export const checkTestUser = (req: any, res: Response, next: NextFunction) => {
  const isTestUser = Boolean(req.user.testUser);
  if (isTestUser) {
    throw new BadRequestError("Demo User. Read Only !!!");
  }
  next();
};

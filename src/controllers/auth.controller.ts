import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { UnAuthenticatedError } from "../errors/customErrors";
import User from "../models/user.model";
import { comparePassword, hashedPassword } from "../utils/hashedPassword";
import { createJWT } from "../utils/tokenUtil";

export const REGISTER = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // FIRST ACCOUNT SHOULD BE ADMIN
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "ADMIN" : "USER";

  // HASH THE PASSWORD
  req.body.password = await hashedPassword(req.body.password);

  // PERSIST DATA
  const newUser = await User.create(req.body);

  res.status(200).json({
    msg: "User Registered, Please Login Now...",
    data: newUser,
    status: "success",
  });
};

export const LOGIN = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // LOOK IF ITS EXIST
  const userExist = await User.findOne({ email: req.body.email });

  if (!userExist) {
    throw new UnAuthenticatedError(
      `Invalid Credentials || Email doesn't exist`
    );
  }

  // COMPARE PASSWORD
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    userExist.password!
  );
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError(
      `Invalid Credentials || Password don't match`
    );
  }
  // SENDS TOKEN TO CLIENT
  const token = createJWT({
    userId: userExist!._id,
    email: userExist.email,
    role: userExist.role,
  });

  // SENDS BACK RESPONSE
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ msg: "User Logged In", status: "success" });
};

export const LOGOUT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ msg: "Logged Out!" });
};

export const FORGOT_PASSWORD = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ msg: "Password Updated" });
};

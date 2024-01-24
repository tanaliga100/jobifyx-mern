import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import User from "../models/user.model";
import { hashedPassword } from "../utils/hashedPassword";

export const REGISTER = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // FIRST ACCOUNT SHOULD BE ADMIN
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "ADMIN" : "USER";

  // HASH THE PASSWORD
  await hashedPassword(req.body.password);

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
  res
    .status(200)
    .json({ msg: "User Logged In", data: req.body, status: "success" });
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

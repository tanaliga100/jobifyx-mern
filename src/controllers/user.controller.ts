import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/user.model";
import { AuthenticatedRequest } from "../utils/constants";

const ALL_USERS = async (req: Request, res: Response, next: NextFunction) => {
  const allUsers = await User.find({}, { password: 0 });
  res
    .status(StatusCodes.OK)
    .json({ msg: "ALL_USERS", length: allUsers.length, allUsers });
};

const CURRENT_USER = async (
  req: AuthenticatedRequest | any,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.user;
  const profile = await User.findOne({ _id: req.user.userId }, { password: 0 });
  res.status(StatusCodes.OK).json({ msg: "CURRENT_USER", profile });
};

const UPDATE_USER = async (
  req: AuthenticatedRequest | any,
  res: Response,
  next: NextFunction
) => {
  // console.log("REQUEST_BODY", req.body, req.user);
  const obj = { ...req.body };
  delete obj.password;
  delete obj.role;
  await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "User Updated" });
};
export { ALL_USERS, CURRENT_USER, UPDATE_USER };

import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../models/user.model";
import { AuthenticatedRequest, FileUploaded } from "../utils/constants";

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
  req: AuthenticatedRequest | FileUploaded | any,
  res: Response,
  next: NextFunction
) => {
  console.log("REQUEST_BODY", req.file, req.body, req.user);
  // console.log(req.file);

  // const { avatar } = req.file;
  const obj = { ...req.body };
  // console.log("BODY", req.body, req.file);
  // console.log("AVATAR", req.file);

  delete obj.password;
  delete obj.role;
  const newUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "User Updated", newUser });
};
export { ALL_USERS, CURRENT_USER, UPDATE_USER };

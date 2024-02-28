import cloudinary from "cloudinary";
import { NextFunction, Request, Response } from "express";
import { promises as fs } from "fs";
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
  // console.log("REQUEST_BODY", req.file, req.body, req.user);
  console.log(req.file);

  // const { avatar } = req.file;
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser?.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser?.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: "User Updated", updatedUser });
};
export { ALL_USERS, CURRENT_USER, UPDATE_USER };


import { NextFunction, Request, Response } from "express";

const ALL_USERS = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ msg: "List of all Users" });
  } catch (error) {
    res.json({
      msg: "Something went wrong",
    });
  }
  next();
};
const SINGLE_USER = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ msg: "User" });
  } catch (error) {
    res.json({
      msg: "Something went wrong",
    });
  }
  next();
};

const CURRENT_USER = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({ msg: "Current User" });
  } catch (error) {
    res.json({
      msg: "Something went wrong",
    });
  }
  next();
};

const UPDATE_USER = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ msg: "User Updated" });
  } catch (error) {
    res.json({
      msg: "Something went wrong",
    });
  }
  next();
};
export { ALL_USERS, CURRENT_USER, SINGLE_USER, UPDATE_USER };

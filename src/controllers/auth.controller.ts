import { NextFunction, Request, Response } from "express";
import "express-async-errors";

const REGISTER = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ msg: "User Registered", data: req.body });
};

const LOGIN = async (req: Request, res: Response, next: NextFunction) => {
   res.send("Logged In");
  res.status(200).json({ msg: "Logged In", data: req.body });
};

const LOGOUT = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ msg: "Logged Out!" });
};
const FORGOT_PASSWORD = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ msg: "Password Updated" });
};

export { FORGOT_PASSWORD, LOGIN, LOGOUT, REGISTER };


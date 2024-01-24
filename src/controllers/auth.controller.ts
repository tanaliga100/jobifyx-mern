import { NextFunction, Request, Response } from "express";

const REGISTER = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);

    return res.json({ msg: "Registered", data: req.body });
  } catch (error) {
    res.json({ error: "Something went wrong" });
  }
};

const LOGIN = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ msg: "Logged In" });
  } catch (error) {
    res.json({ error: "Something went wrong" });
  }
  next();
};

const LOGOUT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ msg: "Logged Out!" });
  } catch (error) {
    res.json({ error: "Something went wrong" });
  }
  next();
};
const FORGOT_PASSWORD = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({ msg: "Password Updated" });
  } catch (error) {
    res.json({ error: "Something went wrong" });
  }
  next();
};

export { FORGOT_PASSWORD, LOGIN, LOGOUT, REGISTER };

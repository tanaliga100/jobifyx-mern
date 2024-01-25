import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Job from "../models/job.model";
import User from "../models/user.model";

export const DASHBOARD = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // GET THE ALL THE USERS
  const allUsers = await User.find({}).select("-password");
  const userLength = await User.countDocuments();
  // GET ALL THE JOBS
  const allJobs = await Job.find({});
  const jobLength = await Job.countDocuments();

  const obj = [
    { userLength, allUsers },
    { jobLength, allJobs },
  ];

  // THEN SENDS BACK TO CLIENT
  res.status(StatusCodes.OK).json({
    msg: "DASHBOARD",
    obj,
  });
};

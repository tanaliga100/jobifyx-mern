import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import { default as Job } from "../models/job.model";
import { AuthenticatedRequest } from "../utils/constants";

export const GET_ALL_JOBS = async (
  req: AuthenticatedRequest | any,
  res: Response,
  next: NextFunction
) => {
  console.log("TOKEN_PAYLOAD", req.user);

  const allJobs = await Job.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ msg: "JOBS", length: allJobs.length, jobs: allJobs });
};

export const CREATE_JOB = async (
  req: AuthenticatedRequest | any,
  res: Response,
  next: NextFunction
) => {
  // ATTACHED THE ID OF THE CREATOR
  const { userId, role } = req.user!;
  req.body.createdBy = req.user.userId;
  const newJob = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "JOB CREATED", job: newJob });
};

export const GET_JOB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // try {
  //   const job = Job.findById(jobId);
  //   if (!job) {
  //     throw new NotFoundError(`No Job found with id ${jobId}`);
  //     throw new NotFoundError(`No Job found with id: ${jobId}`);
  //     return res.status(StatusCodes.BAD_REQUEST).json({
  //       msg: `No Job found with id: ${jobId}`,
  //     });
  //   }
  //   res.status(StatusCodes.OK).json({
  //     msg: "SINGLE JOB",
  //     data: job,
  //   });
  // } catch (error) {
  //   res
  //     .status(StatusCodes.BAD_REQUEST)
  //     .json({ error: "Something went wrongs " });
  // }
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "Single Job", job });
};

export const EDIT_JOB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "JOB MODIFIED", job: job });
};

export const DELETE_JOB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "JOB DELETED", job: removedJob });
};

import { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors";
import { default as Job } from "../models/job.model";

export const GET_ALL_JOBS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allJobs = await Job.find({});
    if (allJobs.length < 1) {
      return res.status(200).json({
        msg: "No Jobs to show",
      });
    }
    res
      .status(StatusCodes.OK)
      .json({ msg: "JOBS", length: allJobs.length, data: allJobs });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "Something went wrong" });
  }
};

export const CREATE_JOB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newJob = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "JOB CREATED", data: newJob });
  // try {
  //   // if (!company || !position) {
  //   //   return res.status(StatusCodes.BAD_REQUEST).json({
  //   //     msg: "All Fields are required",
  //   //   });
  //   // }
  //   //

  //   const newJob = await Job.create("something");
  //   res.status(StatusCodes.CREATED).json({ msg: "JOB CREATED", data: newJob });
  // } catch (error) {
  //   console.log(error);
  //   res.status(StatusCodes.BAD_REQUEST).json({
  //     msg: "Server Error",
  //   });
  // }
};

export const GET_JOB = async (
  req: Request,
  res: Response,

  next: NextFunction
) => {
  const { id: jobId } = req.params;
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
  const job = Job.findById(jobId);
  if (!job) {
    throw new NotFoundError(`No Job found with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

export const EDIT_JOB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;
  try {
    if (!company || !position) {
      return res.status(404).json({ msg: "All Fields are required" });
    }
    const job = await Job.findByIdAndUpdate(jobId, req.body, {
      new: true,
    });

    if (!job) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: `No Job with id : ${jobId}`,
      });
    }

    return res.status(StatusCodes.OK).json({ msg: "JOB MODIFIED", data: job });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "Something went wrong" });
  }
};

export const DELETE_JOB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: jobId } = req.params;
  console.log("to be removed", jobId);

  try {
    const removedJob = await Job.findByIdAndDelete(jobId as any);

    if (!removedJob) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        msg: `No Job with id : ${jobId}`,
      });
    }
    res.status(StatusCodes.OK).json({ msg: "JOB DELETED", data: removedJob });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Something went wrong" });
  }
};

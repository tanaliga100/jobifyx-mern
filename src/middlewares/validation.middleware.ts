import { NextFunction } from "express";
import { body, param, validationResult } from "express-validator";
import mongoose from "mongoose";
import { BadRequestError, NotFoundError } from "../errors/customErrors";
import Job from "../models/job.model";
import User from "../models/user.model";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";

const withValidationErrors = (validateValues: any) => {
  return [
    validateValues,
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages: any = errors.array().map((err: any) => err.msg);
        if (errorMessages[0].startsWith("No")) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must not be less than 3 characters")
    .trim(),
]);

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("Company is required").trim(),
  body("position").notEmpty().withMessage("Position is required").trim(),
  body("jobLocation").notEmpty().withMessage("Job Location is required").trim(),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Invalid Status Value")
    .trim(),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Invalid Job Type Value")
    .trim(),
]);

export const validateJobParam = withValidationErrors([
  param("id").custom(async (value: any) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) throw new BadRequestError(`Invalid MongoDB Id`);

    const job = await Job.findById(value);
    if (!job) {
      throw new NotFoundError(`No Job found with id ${value}`);
    }
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("firstName")
    .notEmpty()
    .isLength({ min: 3, max: 50 })
    .withMessage("FirstNAme is required")
    .trim(),
  body("lastName")
    .notEmpty()
    .isLength({ min: 3, max: 50 })
    .withMessage("LastName is required")
    .trim(),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email Format")
    .custom(async (value: any) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new BadRequestError("Email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 5, max: 50 })
    .withMessage("Password must be 8 characters long")
    .trim(),
]);

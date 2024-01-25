import { NextFunction } from "express";
import { body, param, validationResult } from "express-validator";
import mongoose from "mongoose";
import {
  BadRequestError,
  NotFoundError,
  UnAthorizedError,
} from "../errors/customErrors";
import Job from "../models/job.model";
import User from "../models/user.model";
import { AuthenticatedRequest, JOB_STATUS, JOB_TYPE } from "../utils/constants";

const withValidationErrors = (validateValues: any) => {
  return [
    validateValues,
    (
      req: AuthenticatedRequest | Request,
      res: Response,
      next: NextFunction
    ) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages: any = errors.array().map((err: any) => err.msg);
        if (errorMessages[0].startsWith("No")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("You")) {
          throw new UnAthorizedError(
            `You are not allowed to do this operation!!`
          );
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateTest = withValidationErrors([
  body("firstName")
    .notEmpty()
    .withMessage("FirstName is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must not be less than 3 characters")
    .trim(),
  body("lastName")
    .notEmpty()
    .withMessage("LastName is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must not be less than 3 characters")
    .trim(),
  // body("age")
  //   .notEmpty()
  //   .withMessage("Age is required")
  //   .withMessage("Must be number")
  //   .trim(),
  // body("email")
  //   .notEmpty()
  //   .custom(async (email: any, req: any) => {
  //     const user = await User.findOne({ email });
  //     if (user && user._id.toString() !== req.user.userId) {
  //       throw new BadRequestError(`Email exist`);
  //     }
  //   })
  //   .isEmail()
  //   .withMessage("Must be a valid email")
  //   .trim(),
  // body("address.addressLine").isString().trim(),
  // body("address.state").isString().trim(),
  // body("address.country").isString().trim(),
  // body("address.zipCode").isString().isInt().trim(),
  // body("phoneNumber").isString().trim(),
  // body("gender").isString().trim(),
  // body("occupation").isString().trim(),
  // body("nationality").isString().trim(),
  // body("role").isString().trim(),
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
  param("id").custom(async (value: any, { req }) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) throw new BadRequestError(`Invalid MongoDB Id`);

    const job = await Job.findById(value);
    if (!job) {
      throw new NotFoundError(`No Job found with id ${value}`);
    }

    const isAdmin = req.user.role === "ADMIN";
    const isOwner = req.user.userId === job?.createdBy!.toString();

    if (!isAdmin && !isOwner) {
      throw new UnAthorizedError(`You are not allowed to do this operation!!`);
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

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email Format")
    .trim(),
  body("password").notEmpty().withMessage("Password is required").trim(),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("firstName")
    .notEmpty()
    .withMessage("FirstNAme is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Must not be less than 3 characters")

    .trim(),
  body("lastName")
    .notEmpty()
    .withMessage("LastName is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Must not be less than 3 characters")
    .trim(),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email Format")
    .custom(async (email: any, { req }) => {
      console.log("VALIDATION_lOGGER", req);
      const user = await User.findOne({ email });
      console.log("EXISTS", user);
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("Email already exists ! ");
      }
    }),
  // body("password")
  //   .notEmpty()
  //   .withMessage("Password must be 8 characters long")
  //   .trim(),
  body("age").notEmpty().withMessage("Age is required").trim(),
  body("DOB")
    .isString()
    .notEmpty()
    .withMessage("Date of Birth is required")
    .isLength({ min: 5, max: 50 })
    .trim(),
  body("address.addressLine").isString().trim(),
  body("address.state").isString().trim(),
  body("address.country").isString().trim(),
  body("address.zipCode").isNumeric().trim(),
  body("phoneNumber").isString().trim(),
  body("gender").isString().trim(),
  body("occupation").isString().trim(),
  body("nationality").isString().trim(),
  body("role").isString().trim(),
]);

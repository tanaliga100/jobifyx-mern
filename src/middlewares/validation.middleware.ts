import { NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";

const withValidationErrors = (validateValues: any) => {
  return [
    validateValues,
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages: any = errors.array().map((err: any) => err.msg);
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

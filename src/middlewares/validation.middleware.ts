import { NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors";

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
    .withMessage("Name must not be less than 3 characters"),
]);

import { StatusCodes } from "http-status-codes";

export class NotFoundError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
    this.status = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
    this.status = StatusCodes.BAD_REQUEST;
  }
}

export class UnAuthenticatedError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "UnAuthenticatedError";
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

export class UnAthorizedError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "UnAthorizedError";
    this.status = StatusCodes.FORBIDDEN;
  }
}

export class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}

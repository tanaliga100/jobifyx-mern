import express from "express";
import {
  CREATE_JOB,
  DELETE_JOB,
  EDIT_JOB,
  GET_ALL_JOBS,
  GET_JOB,
} from "../controllers/job.controller";
import { validateJobInput } from "../middlewares/validation.middleware";
const JobRoute = express.Router();

JobRoute.route("/").get(GET_ALL_JOBS);
JobRoute.route("/").post(validateJobInput, CREATE_JOB);
JobRoute.route("/:id").get(GET_JOB);
JobRoute.route("/:id").patch(validateJobInput, EDIT_JOB);
JobRoute.route("/:id").delete(DELETE_JOB);

export default JobRoute;
import express from "express";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

import {
  ALL_USERS,
  CURRENT_USER,
  UPDATE_USER,
} from "../controllers/user.controller";
import { uploads } from "../middlewares/multer.middleware";
import { validateUpdateUserInput } from "../middlewares/validation.middleware";
const UserRoute = express.Router();

UserRoute.route("/all-users").get(ALL_USERS);
UserRoute.route("/current-user").get(CURRENT_USER);
UserRoute.route("/update-user").patch(
  uploads,
  validateUpdateUserInput,
  UPDATE_USER
);

export default UserRoute;

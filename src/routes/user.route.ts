import express from "express";

import {
  ALL_USERS,
  CURRENT_USER,
  UPDATE_USER,
} from "../controllers/user.controller";
import { checkTestUser } from "../middlewares/authenticate.middleware";
import { upload } from "../middlewares/multer.middleware";
import { validateUpdateUserInput } from "../middlewares/validation.middleware";
const UserRoute = express.Router();

UserRoute.route("/all-users").get(ALL_USERS);
UserRoute.route("/current-user").get(CURRENT_USER);
UserRoute.route("/update-user").patch(
  checkTestUser,
  upload.single("avatar"),
  validateUpdateUserInput,
  UPDATE_USER
);

export default UserRoute;

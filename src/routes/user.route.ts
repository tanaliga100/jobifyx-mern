import express from "express";
import {
  ALL_USERS,
  CURRENT_USER,
  SINGLE_USER,
  UPDATE_USER,
} from "../controllers/user.controller";
const UserRoute = express.Router();

UserRoute.route("/").get(ALL_USERS);
UserRoute.route("/:id").get(CURRENT_USER);
UserRoute.route("/:id").get(SINGLE_USER);
UserRoute.route("/:id").patch(UPDATE_USER);

export default UserRoute;

import express from "express";
import {
  FORGOT_PASSWORD,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../controllers/auth.controller";
import { validateRegisterInput } from "../middlewares/validation.middleware";

const AuthRoute = express.Router();

AuthRoute.route("/register").post(validateRegisterInput, REGISTER);
AuthRoute.route("/login").post(LOGIN);
AuthRoute.route("/forgot-password").post(FORGOT_PASSWORD);
AuthRoute.route("/").get(LOGOUT);

export default AuthRoute;

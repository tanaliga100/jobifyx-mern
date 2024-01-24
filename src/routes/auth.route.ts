import express from "express";
import {
  FORGOT_PASSWORD,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../controllers/auth.controller";

const router = express.Router();

router.route("/register").post(REGISTER);
router.route("/login").post(LOGIN);
router.route("/forgot-password").post(FORGOT_PASSWORD);
router.route("/").get(LOGOUT);

export { router as AuthRoute };

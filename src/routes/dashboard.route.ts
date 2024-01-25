import express from "express";
import { DASHBOARD } from "../controllers/admin.conttroller";

const DashboardRoute = express.Router();

DashboardRoute.route("/dashboard").get(DASHBOARD);

export default DashboardRoute;

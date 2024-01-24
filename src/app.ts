import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import morgan from "morgan";
import { connectDb } from "./config";
import { authenticateMiddleware } from "./middlewares/authenticate.middleware";
import { validateTest } from "./middlewares/validation.middleware";
import AuthRoute from "./routes/auth.route";
import JobRoute from "./routes/jobs.route";
import UserRoute from "./routes/user.route";

//For env File
dotenv.config();

// instance
const app: Express = express();
const port = process.env.PORT || 8000;

// MIDDLEWARES - TOP
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ROUTES
app.post("/", validateTest, (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(200).json({
    msg: "Server Alive :  Typescript !!!",
    data: name,
  });
});

app.post("/:id", validateTest, (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(200).json({
    msg: "Server Alive :  Typescript !!!",
    data: name,
  });
});

app.use(`/api/v1/auth`, AuthRoute);
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/jobs", authenticateMiddleware, JobRoute);

// MIDDLEWARES - TAIL
app.use("*", (res: Response) => {
  return res.status(StatusCodes.NOT_FOUND).send(
    `<h1>Route Doesnt Exist</h1>
  <a href="/">Go Back</a>`
  );
});

// 404 MIDDLEWARE
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    msg: "Not Found",
  });
});

// ERROR MIDDLEWARE
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log("MIDDLEWARE", err);
  const statusCOde = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something went wrong";
  res.status(statusCOde).json({
    FROM_MIDDLEWARE: msg,
  });
});

const start = async () => {
  try {
    // db connection here...
    await connectDb(process.env.MONGO_URI as string);
    app.listen(port, () => {
      console.log(`CONNECTED !!! : Server is Fire at http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Something went wrong");
  }
};
start();

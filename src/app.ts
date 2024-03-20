import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import morgan from "morgan";
import path from "path";
import { connectDb } from "./config";
import {
  authenticateMiddleware,
  authorizedPermissions,
} from "./middlewares/authenticate.middleware";
import AuthRoute from "./routes/auth.route";
import DashboardRoute from "./routes/dashboard.route";
import JobRoute from "./routes/jobs.route";
import UserRoute from "./routes/user.route";

//For env File
dotenv.config();

// instance
const app: Express = express();
const port = process.env.PORT || 8000;

// // PUBLIC

// const path = require("path");
// const { dirname } = require("path");
// const __dirname = dirname(__filename);

// import path from "path";
// const { fileURLToPath } = require("url");
// const __filename = fileURLToPath(import.meta.url);

// MIDDLEWARES - TOP

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// ROUTES
// app.post("/", validateTest, (req: Request, res: Response) => {
//   const { name } = req.body;
//   res.status(StatusCodes.OK).json({
//     msg: "Server Alive :  Typescript !!!",
//     data: name,
//   });
// });

app.get("/api/v1/test", (req: Request, res: Response) => {
  return res.status(200).json({
    msg: "TEST ROUTE",
  });
});

// const upload = multer({ dest: "uploads/" }).single("avatar");

// app.post("/api/v1/upload", upload, (req: Request, res: Response) => {
//   console.log("files", req.file);
//   res.status(200).json({
//     msg: "Uploaded Successfully",
//   });
// });

// app.post("/:id", validateTest, (req: Request, res: Response) => {
//   const { name } = req.body;
//   res.status(200).json({
//     msg: "Server Alive :  Typescript !!!",
//     data: name,
//   });
// });

app.use(`/api/v1/auth`, AuthRoute); // done
app.use(
  "/api/v1/admin",
  authenticateMiddleware,
  authorizedPermissions(["ADMIN", "MODERATOR"]),
  DashboardRoute
); // done
app.use("/api/v1/users", authenticateMiddleware, UserRoute); // done
app.use("/api/v1/jobs", authenticateMiddleware, JobRoute);

// MIDDLEWARES - TAIL
// app.use("*", (res: Response) => {
//   res.status(StatusCodes.NOT_FOUND).send(
//     `<h1>Route Doesnt Exist</h1>
//   <a href="/">Go Back</a>`
//   );
// });

// 404 MIDDLEWARE
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    msg: "Not Found",
  });
});

// ERROR MIDDLEWARE
app.use((err: any | Error, req: Request, res: Response, next: NextFunction) => {
  console.log("FROM_MIDDLEWARE", err.message);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something went wrong";

  if (statusCode || msg) {
    return res.status(statusCode).json({
      msg,
    });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg,
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
console.log(process.env.NODE_ENV);


const num = [1, 2, 3, 4, 5];
const newNum = num.map(function (num: number) {
  console.log(num);
  
  if (num == 2) {
    return num * 2
  }
  return 0;
})
console.log('NEW', newNum);


const isStart = true;
const isLoading = false;
const res = isStart ? isLoading ? "yes" : "no" : "yes"

console.log('res', res);

const num1 = +"1";
const num2 = +"2";

const result = num1 + num2;
console.log('ressut', result);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 10;
const pairs = []

for (let i = 0; i <= numbers.length; i++) {
  console.log('iiiiis', i);
   for (let j = i + 1; j <= numbers.length; j++) {
   console.log('jsss', j);
     if (numbers[i] + numbers[j] === target) {
       pairs.push([numbers[i], numbers[j]]);
   }
}
}
console.log('Pairs:', pairs);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const targetSum = 10;

// const pairs:any = [];

// numbers.forEach((num, index) => {
//   // NUM is the value in the array;
//     const complement = targetSum - num;
//   const foundIndex = numbers.findIndex((n, i) => 

//     i !== index && n === complement  );
//     if (foundIndex !== -1) {
//         pairs.push([num, numbers[foundIndex]]);
//     }
// });

// console.log('Pairs:', pairs);
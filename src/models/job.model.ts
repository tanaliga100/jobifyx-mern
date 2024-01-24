import mongoose from "mongoose";

// interface IJob {
//   company: string;
//   position: string;
//   jobStatus: "pending" | "interview" | "declined";
// }

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "intership"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "Manila, Philippines",
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);
export default Job;

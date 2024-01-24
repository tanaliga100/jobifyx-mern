import mongoose from "mongoose";

export const connectDb = (connectionString: string) => {
  return mongoose.connect(connectionString as string);
};

import mongoose from "mongoose";
import { USER_GENDER, USER_ROLE } from "../utils/constants";

const AddressSchema = new mongoose.Schema({
  addressLine: { type: String, default: "Block 19, Lot 3, Mimosa" },
  state: { type: String, default: "Quezon City" },
  country: { type: String, default: "Philippines" },
  zipCode: { type: Number, default: 1116 },
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: String,
  age: Number,
  DOB: Date,
  address: AddressSchema,
  phoneNumber: Number,
  gender: {
    type: String,
    enum: Object.values(USER_GENDER),
    default: USER_GENDER.OTHER,
  },
  occupation: {
    type: String,
  },
  nationality: {
    type: String,
    default: "Filipino",
  },

  role: {
    type: String,
    enum: Object.values(USER_ROLE),
    default: USER_ROLE.ADMIN,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;

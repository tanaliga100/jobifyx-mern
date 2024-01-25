import mongoose from "mongoose";
import { USER_GENDER, USER_ROLE } from "../utils/constants";

const AddressSchema = new mongoose.Schema({
  addressLine: { type: String, default: "Block 19, Lot 3, Mimosa" },
  state: { type: String, default: "Quezon City" },
  country: { type: String, default: "Philippines" },
  zipCode: { type: Number, default: null },
});

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  age: { type: String, default: null },
  DOB: { type: String, default: "06-20-96" },
  address: AddressSchema,
  phoneNumber: { type: String, default: "09690243355" },
  gender: {
    type: String,
    enum: Object.values(USER_GENDER),
    default: USER_GENDER.OTHER,
  },
  occupation: {
    type: String,
    default: "Software Engineer",
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

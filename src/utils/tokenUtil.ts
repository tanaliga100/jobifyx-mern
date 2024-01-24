import jwt from "jsonwebtoken";
export const createJWT = (payload: any) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  const decoded = jwt.decode(token);

  return decoded;
};

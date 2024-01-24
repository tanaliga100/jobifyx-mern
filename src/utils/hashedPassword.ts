import bcrypt from "bcryptjs";
export const hashedPassword = async (candidatePassword: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(candidatePassword, salt);
  return hashedPassword;
};

export const comparePassword = async (
  candidatePassword: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(candidatePassword, hashedPassword);
  return isMatch;
};

import bcrypt from 'bcryptjs';
export const hashedPassword = async (candidatePassword: string) => {
  const genSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(candidatePassword, genSalt);
  return hashedPassword;
};

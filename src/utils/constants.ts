export const JOB_STATUS = {
  PENDING: "pending",
  INTERVIEW: "interview",
  DECLINED: "declined",
};

export const JOB_TYPE = {
  FULL_TIME: "full-time",
  PART_TIME: "part-time",
  INTERNSHIP: "internship",
};

export const JOB_SORT_BY = {
  NEWEST_FIRST: "newest",
  OLDEST_FIRST: " oldest",
  ASCENDING: "a-z",
  DESCENDING: " z-a",
};

export const USER_GENDER = {
  MALE: "male",
  FEMALE: " female",
  OTHER: "other",
};

export const USER_ROLE = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    role: string;
  };
}

export interface UserPayload {
  userId: string;
  role: string;
}

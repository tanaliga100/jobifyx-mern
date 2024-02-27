import { Typography } from "@mui/material";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
import { customFetch } from "../utils/custom-fetch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react-refresh/only-export-components
export const deleteJobAction = async (params: any) => {
  try {
    const res = await customFetch.delete(`/jobs/${params.params.id}`);
    toast.success(res.data.msg, {
      duration: 1000,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    toast.error(error.response.data.msg);
  }

  return redirect("/dashboard/all-jobs");
};

export const DeleteJob = () => {
  return <Typography> Delete Job</Typography>;
};

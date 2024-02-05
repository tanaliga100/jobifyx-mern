import { Box } from "@mui/material";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import { customFetch } from "../utils/custom-fetch";

export const allJobsLoader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    console.log("ALL_JOBS", data);
    toast(data.msg, {
      icon: "👏 👏 👏",
      duration: 1000,
    });
    return { data };

    return data;
  } catch (error) {
    return redirect("/");
  }
};

const AllJobs = () => {
  return (
    <div>
      <Box sx={{ display: "flex", flex: 1, gap: 10 }}>
        <Header title="All_JOBS" subtitle="List of all the jobs created" />
        <Search />
      </Box>
    </div>
  );
};

export default AllJobs;

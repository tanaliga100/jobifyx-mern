import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import { Badge, Box } from "@mui/material";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { redirect, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Jobs from "../components/Jobs";
import Search from "../components/Search";
import { customFetch } from "../utils/custom-fetch";

export const allJobsLoader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    toast(data.msg, {
      icon: "👏 👏 👏",
      duration: 1000,
    });
    return data;
  } catch (error) {
    return redirect("/");
  }
};

export interface IJobs {
  msg: string;
  length: number;
  jobs: unknown[];
}

const AllJobsContext = createContext({});

const AllJobs = () => {
  const data = useLoaderData() as IJobs;

  return (
    <AllJobsContext.Provider value={data}>
      <Box sx={{ display: "flex", flex: 1, gap: 10 }}>
        <Header title="All_JOBS" subtitle="List of all the jobs created" />
        <Badge
          badgeContent={data ? data.jobs.length : 0}
          showZero
          color="error"
          sx={{ mt: 1.2 }}
        >
          <DynamicFormIcon color="action" sx={{ color: "red" }} />
        </Badge>
        <Search />
      </Box>
      <Box>
        <Jobs />
      </Box>
    </AllJobsContext.Provider>
  );
};

export default AllJobs;

export const useAllJobsContext = () => {
  return useContext(AllJobsContext);
};

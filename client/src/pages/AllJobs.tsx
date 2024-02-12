import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import { Badge, Box, Button, Paper } from "@mui/material";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { Link, redirect, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import JobsContainer from "../components/Jobs";
import SearchContainer from "../components/Search";
import { customFetch } from "../utils/custom-fetch";

// eslint-disable-next-line react-refresh/only-export-components
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
      <Box sx={{ display: "flex", flex: 1, gap: 10, alignItems: "center" }}>
        <Header title="All_JOBS" subtitle="List of all the jobs created" />
        <Badge
          badgeContent={data ? data.jobs.length : 0}
          showZero
          color="error"
          sx={{ mt: 1.2 }}
        >
          <DynamicFormIcon color="action" sx={{ color: "red" }} />
        </Badge>
        <Button color="error" size="small" startIcon={<AddToPhotosIcon />}>
          <Link to="/dashboard/add-job">Add Job</Link>
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* SEARCH CONTAINER  */}
        <Paper elevation={1} sx={{ py: 1 }}>
          <SearchContainer />
        </Paper>
        {/* JOBS CONTAINER  */}
        <JobsContainer />
      </Box>
    </AllJobsContext.Provider>
  );
};

export default AllJobs;

export const useAllJobsContext = () => {
  return useContext(AllJobsContext);
};

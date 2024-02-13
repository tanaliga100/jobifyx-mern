import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import { Badge, Box, Button } from "@mui/material";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { Link, redirect, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import JobsContainer from "../components/JobsContainer";
import SearchContainer from "../components/SearchContainer";
import { customFetch } from "../utils/custom-fetch";

// eslint-disable-next-line react-refresh/only-export-components
export const allJobsLoader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    toast.loading(data.msg, {
      duration: 2000,
      position: "top-center",
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
        <Link to="/dashboard/add-job">
          <Button color="error" size="small" startIcon={<AddToPhotosIcon />}>
            Add Job
          </Button>
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* SEARCH CONTAINER  */}
        <SearchContainer />
        {/* JOBS CONTAINER  */}
        <JobsContainer />
      </Box>
    </AllJobsContext.Provider>
  );
};

export default AllJobs;

// eslint-disable-next-line react-refresh/only-export-components
export const useAllJobsContext = () => {
  return useContext(AllJobsContext);
};

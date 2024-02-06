/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IJobs, useAllJobsContext } from "../pages/AllJobs";

interface IJob {
  company: string;
  createdAt: string;
  createdBy: string;
  jobLocation: string;
  jobStatus: string;
  jobType: string;
  position: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "company", headerName: "COMPANY", width: 130 },
  { field: "jobLocation", headerName: "JOB LOCATION ", width: 200 },
  { field: "position", headerName: "JOB POSITION ", width: 150 },
  { field: "jobStatus", headerName: "JOB STATUS", width: 100 },
  { field: "createdAt", headerName: "CREATED AT", width: 200 },
  { field: "createdBy", headerName: "CREATED BY", width: 200 },
];

// const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

export default function Jobs() {
  const data = useAllJobsContext();
  const { jobs, length } = data as IJobs;
  console.log("CONTEXT_JOBS", jobs);
  const [gridRows, setGridRows] = useState<IJob | any>([]);

  useEffect(() => {
    // Transform jobs data into rows
    const transformedRows = jobs.map((job: any) => ({
      id: job._id,
      company: job.company,
      jobLocation: job.jobLocation,
      position: job.position,
      jobStatus: job.jobStatus,
      createdAt: job.createdAt,
      createdBy: job.createdBy,
    }));
    setGridRows(transformedRows);
  }, [jobs]);

  if (length === 0) {
    return (
      <Box>
        <Typography variant="h2">No Jobs to show...</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ height: 450, width: "100%" }}>
      {/* {jobs.map((job: { _id: string | any } | any | unknown) => {
        return <JobDetails key={job._id} {...jobs} />;
      })} */}
      <DataGrid rows={gridRows} columns={columns} checkboxSelection />
    </Box>
  );
}

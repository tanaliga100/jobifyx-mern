/* eslint-disable @typescript-eslint/no-explicit-any */
interface IProps {
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

export default function JobDetails(jobs: IProps | any) {
  console.log("details", jobs);
  return (
    <Box sx={{ height: "auto", overflowY: "auto" }}>
      <Typography variant="caption">{jobs._id} </Typography>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "COMPANY", width: 130 },
//   { field: "lastName", headerName: "JOB LOCATION ", width: 130 },
//   { field: "lastName", headerName: "JOB POSITION ", width: 130 },

//   {
//     field: "age",
//     headerName: "CREATED BY",
//     type: "number",
//     width: 90,
//   },
// ];

// const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { IJobs, useAllJobsContext } from "../pages/AllJobs";
import JobDetails from "./JobDetails";

// interface IJob {
//   company: string;
//   createdAt: string;
//   createdBy: string;
//   jobLocation: string;
//   jobStatus: string;
//   jobType: string;
//   position: string;
//   updatedAt: string;
//   __v: number;
//   _id: string;
// }

// const columns: GridColDef[] = [
//   // { field: "createdBy", headerName: "CREATED BY", width: 300 },
//   { field: "company", headerName: "COMPANY", width: 130 },
//   { field: "jobLocation", headerName: "JOB LOCATION ", width: 200 },
//   { field: "position", headerName: "JOB POSITION ", width: 150 },
//   { field: "jobStatus", headerName: "JOB STATUS", width: 100 },
// ];

// const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

export default function JobsContainer() {
  const data = useAllJobsContext();
  const { jobs, length } = data as IJobs;
  console.log("CONTEXT_JOBS", jobs);
  // const [gridRows, setGridRows] = useState<IJob | any>([]);

  // useEffect(() => {
  //   // Transform jobs data into rows
  //   const transformedRows = jobs.map((job: any) => ({
  //     id: job._id,
  //     company: job.company,
  //     jobLocation: job.jobLocation,
  //     position: job.position,
  //     jobStatus: job.jobStatus,
  //     createdBy: job.createdBy,
  //   }));
  //   setGridRows(transformedRows);
  // }, [jobs]);

  if (length === 0) {
    return (
      <Box>
        <Typography variant="overline">No Jobs to show...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: 400,
        width: "90%",
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {jobs.map((job: any | unknown) => {
        return <JobDetails key={job._id} {...job} />;
      })}
      {/* <DataGrid rows={gridRows} columns={columns} /> */}
    </Box>
  );
}

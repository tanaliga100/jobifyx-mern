import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import ActionButton from "./ActionButton";
import JobInfo from "./JobInfo";
day.extend(advancedFormat);

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

export default function JobDetails(job: IProps | any) {
  const dateCreated = day(job.createdAt).format("MMM Do, YYYY");
  const dateUpdated = day(job.updatedAt).format("MMM Do, YYYY");
  const { company, jobLocation } = job;
  const props = {
    dateCreated,
    dateUpdated,
    company,
    jobLocation,
  };
  console.log(job);

  let badgeColor = "";
  switch (job.jobStatus) {
    case "interview":
      badgeColor = "success";
      break;
    case "declined":
      badgeColor = "error";
      break;
    default:
      badgeColor = "info";
      break;
  }

  return (
    <Card sx={{ display: "flex" }}>
      {/* <Chip
        label={job.jobStatus.toString().slice(0, 1)}
        variant="filled"
        // color={badgeColor}
        sx={{
          fontSize: ".5rem",
          color: "white",
          fontWeight: "2rem",
        }}
      /> */}
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography variant="overline" fontWeight={800} color="info">
          {job.position}
        </Typography>
        <JobInfo props={props} />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActionButton icon={<EditNoteIcon />} url="#" label="Edit " />
        <ActionButton icon={<DeleteIcon />} url="#" label="Delete " />
      </CardActions>
    </Card>
  );
}

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

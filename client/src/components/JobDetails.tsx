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
  console.log("details", job);
  return (
    <Card sx={{}}>
      {/* <Typography variant="caption">{job._id} </Typography> */}
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="caption" fontWeight={700}>
          {job.position}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          {job.company}
        </Typography>
        <Typography variant="caption" color="error" component="div">
          {job.jobType}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
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

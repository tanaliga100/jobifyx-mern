import { Box, Button, Chip, Modal, Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import AllOutIcon from "@mui/icons-material/AllOut";
import DeleteIcon from "@mui/icons-material/Delete";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import React from "react";
import { Form, Link } from "react-router-dom";
import Header from "./Header";
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
  // let badgeColor = "";
  // switch (job.jobStatus) {
  //   case "interview":
  //     badgeColor = "success";
  //     break;
  //   case "declined":
  //     badgeColor = "error";
  //     break;
  //   default:
  //     badgeColor = "info";
  //     break;
  // }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as const,
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card sx={{ display: "flex" }}>
      {/* <Chip
        label={job.jobStatus.toString().slice(0, 1)}
        variant="filled"
        // color={badgeColor}
        sx={{
          fontSize: "1rem",
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
        <div
          className={`color: ${
            job.jobStatus === "pending" ? "pending" : "blue"
          }`}
        >
          <Button onClick={handleOpen}>
            <AllOutIcon />
          </Button>
        </div>
      </CardActions>
      {/* MODAL HERE */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Header
              title="Selected Job"
              subtitle="Information about the jobs "
              id={job._id}
            />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Chip
                  label="POSITION"
                  variant="outlined"
                  sx={{ fontSize: ".6rem" }}
                />

                <Typography variant="overline" fontWeight={600}>
                  {job.position}
                </Typography>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Chip
                  label="STATUS"
                  variant="outlined"
                  sx={{ fontSize: ".6rem" }}
                />
                <Typography variant="overline" fontWeight={600}>
                  {job.jobStatus}
                </Typography>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Chip
                  label="LOCATION"
                  variant="outlined"
                  sx={{ fontSize: ".6rem" }}
                />
                <Typography variant="overline" fontWeight={600}>
                  {job.jobLocation}
                </Typography>
              </Paper>{" "}
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Chip
                  label="Type"
                  variant="outlined"
                  sx={{ fontSize: ".6rem" }}
                />
                <Typography variant="overline" fontWeight={600}>
                  {job.jobType}
                </Typography>
              </Paper>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 5,
                mt: 5,
                width: "100%",
                justifyContent: "center",
                // alignItems: "center",
              }}
            >
              {/* <ActionButton
                icon={<EditNoteIcon color="error" />}
                url="#"
                label="Edit"
              />
              <ActionButton icon={<DeleteIcon />} url="#" label="Delete" /> */}
              <Link to={`/dashboard/edit-job/${job._id}`}>
                <Button variant="contained" color="warning">
                  Edit
                </Button>
              </Link>
              <Form method="post" action={`/dashboard/delete-job/${job._id}`}>
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </Form>
            </Box>
          </Box>
        </Modal>
      </div>
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

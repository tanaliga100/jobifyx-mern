import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../src/utils/constants";
import FormRow from "../components/FormRow";
import Header from "../components/Header";
import { customFetch } from "../utils/custom-fetch";

// eslint-disable-next-line react-refresh/only-export-components
export const addJobAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const jobData = Object.fromEntries(formData);
  // submission here...
  try {
    const response = await customFetch.post("/jobs", jobData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { msg } = await response.data;
    toast.success(msg, {
      duration: 2000,
    });
    return redirect("/dashboard");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMsg = error!.response?.data.msg as string;
    if (errorMsg) {
      toast.error(errorMsg, {
        duration: 2000,
      });
    }
    return null;
  }
};

const AddJob = () => {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post">
      <Box sx={{ display: "flex", flex: 1, gap: 3 }}>
        <Header title="Add Job" subtitle="You can add job here.." />
        <Button color="error" size="small" startIcon={<BorderAllIcon />}>
          <Link to="/dashboard/all-jobs">All Jobs</Link>
        </Button>
      </Box>
      <Box
        sx={{
          "& .MuiTextField-root": { mr: 2, my: 2, width: "25ch" },
        }}
      >
        <FormRow
          type="text"
          name="company"
          label="Company Name"
          placeholder="Enter company..."
        />
        <FormRow
          type="text"
          name="position"
          label="Position Name"
          placeholder="Enter position..."
        />{" "}
        <FormRow
          type="text"
          name="jobLocation"
          label="Job Location Name"
          placeholder="Enter job location..."
        />{" "}
        <Box
          sx={{
            display: "flex",
            width: "3rem",
            gap: 2,
            flex: 1,
          }}
        >
          <FormControl sx={{ m: 0, minWidth: 200 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label" color="success">
              Job Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={type}
              onChange={(e) => setType(e.target.value)}
              autoWidth
              name="jobType"
              label="Job Type"
              color="success"
            >
              {Object.values(JOB_TYPE).map(
                (
                  item,
                  index // fixed syntax here
                ) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem> // assuming index starts from 1
                )
              )}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 0, minWidth: 200 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label" color="success">
              Job Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              autoWidth
              name="jobStatus"
              defaultValue="pending"
              label="Job Status"
              color="success"
            >
              {Object.values(JOB_STATUS).map(
                (
                  item,
                  index // fixed syntax here
                ) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem> // assuming index starts from 1
                )
              )}
            </Select>
          </FormControl>
        </Box>
        <Button
          endIcon={<AddToPhotosIcon sx={{ color: "white" }} />}
          type="submit"
          variant="outlined"
          size="large"
          color="inherit"
          sx={{
            fontSize: ".8rem",
            fontWeight: 700,
            my: 5,
            color: "teal",
            bgColor: "inherit",
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Add Job"}
        </Button>
      </Box>
    </Form>
  );
};

export default AddJob;

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button } from "@mui/material";
import {
  Link,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";
import FormRow from "../components/FormRow";
import Header from "../components/Header";

import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { JOB_STATUS, JOB_TYPE } from "../../../src/utils/constants";
import { customFetch } from "../utils/custom-fetch";

export const editJobLoader = async ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  request,
  params,
}: {
  request: Request;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) => {
  console.log(params);
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const errorResponse = err?.response?.data?.msg;
    toast.error(errorResponse);
    return err;
  }
};

export const editJobAction = async () => {};

const EditJob = () => {
  const res = useLoaderData();
  const { company, jobLocation, jobType, jobStatus, position } = res;
  console.log("fetched job", res);

  const params = useParams();
  console.log("params", params);

  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Box sx={{}}>
      <Box sx={{ display: "flex", flex: 1, gap: 3 }}>
        <Header title="EditJob" subtitle="You can edit a job here..." />
        <Button color="error" size="small" startIcon={<AccountCircleIcon />}>
          <Link to="#">EditJob</Link>
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
          defaultValue={company}
        />
        <FormRow
          type="text"
          name="position"
          label="Position Name"
          placeholder="Enter position..."
          defaultValue={position}
        />{" "}
        <FormRow
          type="text"
          name="jobLocation"
          label="Job Location Name"
          placeholder="Enter job location..."
          defaultValue={jobLocation}
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
              value={jobType}
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
              value={jobStatus}
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
          {isSubmitting ? "Submitting" : "Save Changes"}
        </Button>
      </Box>
    </Box>
  );
};

export default EditJob;

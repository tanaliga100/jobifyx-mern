import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button, Typography } from "@mui/material";
import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import FormRow from "../components/FormRow";
import Header from "../components/Header";

import UpgradeIcon from "@mui/icons-material/Upgrade";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import toast from "react-hot-toast";
import { JOB_STATUS, JOB_TYPE } from "../../../src/utils/constants";
import { customFetch } from "../utils/custom-fetch";

// eslint-disable-next-line react-refresh/only-export-components
export const editJobLoader = async ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: {
  request: Request;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) => {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react-refresh/only-export-components
export const editJobAction = async ({
  request,
  params,
}: {
  request: Request;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) => {
  const FormData = await request.formData();
  const data = Object.fromEntries(FormData);

  try {
    const res = await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success(res.data.msg, {
      duration: 1000,
    });
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    return error;
  }
};

const EditJob = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { job } = (useLoaderData() as any) || {};

  const { company, jobLocation, jobType, jobStatus, position } = job;

  // eslint-disable-next-line react-hooks/rules-of-hooks

  // const [type, setType] = useState("");
  // const [status, setStatus] = useState("");

  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  if (!job) {
    return <Typography variant="overline">Loading...</Typography>;
  }

  return (
    <Box sx={{}}>
      <Box sx={{ display: "flex", flex: 1, gap: 3 }}>
        <Header title="EditJob" subtitle="You can edit a job here..." />
        <Link to="#">
          <Button color="error" size="small" startIcon={<AccountCircleIcon />}>
            EditJob
          </Button>
        </Link>
      </Box>

      <Box
        sx={{
          "& .MuiTextField-root": { mr: 2, my: 2, width: "25ch" },
        }}
      >
        <Form method="post">
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
              <InputLabel
                id="demo-simple-select-autowidth-label"
                color="success"
              >
                Job Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={jobType}
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
              <InputLabel
                id="demo-simple-select-autowidth-label"
                color="success"
              >
                Job Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={jobStatus}
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
            endIcon={<UpgradeIcon sx={{ color: "white" }} />}
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
        </Form>
      </Box>
    </Box>
  );
};

export default EditJob;

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { Form, useNavigation, useOutletContext } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../src/utils/constants";
import FormRow from "../components/FormRow";
import Header from "../components/Header";

const AddJob = () => {
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const userCreds = useOutletContext!();
  console.log("CONTEXT", userCreds);
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post">
      <Header title="Add Job" subtitle="You can add job here.." />
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
          defaultValue="Google"
        />
        <FormRow
          type="text"
          name="position"
          label="Position Name"
          placeholder="Enter position..."
          defaultValue="Developer"
        />{" "}
        <FormRow
          type="text"
          name="jobLocation"
          label="Job Location Name"
          placeholder="Enter job location..."
          defaultValue="Manila, Philippines"
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
            <InputLabel id="demo-simple-select-autowidth-label">
              Job Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={type}
              onChange={(e) => setType(e.target.value)}
              autoWidth
              defaultValue="pending"
              name="jobType"
              label="Job Type"
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
            <InputLabel id="demo-simple-select-autowidth-label">
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
          type="submit"
          variant="contained"
          color="inherit"
          size="large"
          sx={{ fontSize: ".8rem", fontWeight: 700, my: 5 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Add Job"}
        </Button>
      </Box>
    </Form>
  );
};

export default AddJob;

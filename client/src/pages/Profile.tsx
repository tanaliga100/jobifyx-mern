import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Form, Link, useNavigation, useOutletContext } from "react-router-dom";
import { USER_GENDER, USER_ROLE } from "../../../src/utils/constants";
import FormRow from "../components/FormRow";
import { default as Header } from "../components/Header";

const Profile = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user } = useOutletContext() as any;
  console.log("loggedUser", user.profile);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [gender, setGender] = useState(user.profile.gender);
  const [role, setRole] = useState(user.profile.role);

  return (
    <>
      <Box sx={{ display: "flex", flex: 1, gap: 10, alignItems: "center" }}>
        <Header title="Profile" subtitle="You can edit your prof" />
        <Link to="#">
          <Button color="error" size="small" startIcon={<AccountCircleIcon />}>
            Profile
          </Button>
        </Link>
      </Box>
      <Form method="post">
        <Box
          sx={{
            "& .MuiTextField-root": { mr: 2, my: 2, width: "25ch" },
          }}
        >
          <Stack sx={{ pb: 2 }}>
            <Typography variant="caption">Select an image file</Typography>
            <input type="file" id="" name="avatar" />
          </Stack>
          <FormRow
            type="text"
            name="firstName"
            label="First Name"
            defaultValue={user.profile.firstName}
          />
          <FormRow
            type="text"
            name="lastName"
            label="Last Name"
            defaultValue={user.profile.lastName}
          />
          <FormRow
            type="text"
            name="occupation"
            label="Occupation"
            defaultValue={user.profile.occupation}
          />

          <FormRow
            type="text"
            name="nationality"
            label="Nationality"
            defaultValue={user.profile.nationality}
          />
          <FormRow
            type="text"
            name="phoneNumber"
            label="PhoneNumber"
            defaultValue={user.profile.phoneNumber}
          />
          <FormRow
            type="text"
            name="age"
            label="Age"
            defaultValue={user.profile.age}
          />
          <Box
            sx={{
              display: "flex",
              width: "2rem",
              gap: 2,
              my: 2,
              flex: 1,
            }}
          >
            <FormControl sx={{ m: 0, minWidth: 200 }} size="small">
              <InputLabel
                id="demo-simple-select-autowidth-label"
                color="success"
              >
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                autoWidth
                name="gender"
                defaultValue="other"
                color="success"
              >
                {Object.values(USER_GENDER).map(
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
                Role
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                autoWidth
                name="role"
                color="success"
              >
                {Object.values(USER_ROLE).map(
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
            {isSubmitting ? "Submitting" : "Update Profile"}
          </Button>
        </Box>
      </Form>
    </>
  );
};

export default Profile;

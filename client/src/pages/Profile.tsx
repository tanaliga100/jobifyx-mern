import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  Form,
  Link,
  redirect,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import { USER_GENDER, USER_ROLE } from "../../../src/utils/constants";
import FormRow from "../components/FormRow";
import { default as Header } from "../components/Header";
import { customFetch } from "../utils/custom-fetch";

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const editProfileAction = async ({ request }: { request: any }) => {
  const formData = await request.formData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const file = formData.get("avatar") as any;
  if (file && file.size > 500000) {
    toast.error("Image size too large !");
    return null;
  }
  // get the image file
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  try {
    const res = await customFetch.patch("/users/update-user", formData);

    toast.loading(res.data.msg, {
      duration: 2000,
    });
    return redirect("/dashboard/profile");
  } catch (error) {
    console.log(error);
  }
  return null;
};

const Profile = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user } = useOutletContext() as any;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [gender, setGender] = useState(user.profile.gender);
  const [role, setRole] = useState(user.profile.role);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // IMAGE READER
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (event: React.ChangeEvent<any>) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setPreviewImage(reader.result as any);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <Form method="post" encType="multipart/form-data">
      <Box sx={{ display: "flex", flex: 1, gap: 10, alignItems: "center" }}>
        <Header title="Profile" subtitle="You can edit your profile here..." />
        <Link to="#">
          <Button color="error" size="small" startIcon={<AccountCircleIcon />}>
            Profile
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          "& .MuiTextField-root": { mr: 2, my: 2, width: "25ch" },
        }}
      >
        <Box sx={{ p: 2 }}>
          {previewImage && (
            <>
              <Avatar
                alt="Avatar"
                src={previewImage}
                sx={{ width: 60, height: 60 }}
              />
            </>
          )}
        </Box>
        <Stack sx={{ pb: 2 }} maxWidth={300}>
          <Typography variant="caption">
            {previewImage ? "Image Preview" : "Select an Image "}
          </Typography>
          <input
            type="file"
            name="avatar"
            accept="image/*" // Specify to accept only image files
            onChange={handleFileChange}
          />
        </Stack>
        {/* <FormRow type="file" name="avatar" /> */}
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
          type="email"
          name="email"
          label="Email"
          defaultValue={user.profile.email}
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
            <InputLabel id="demo-simple-select-autowidth-label" color="success">
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
            <InputLabel id="demo-simple-select-autowidth-label" color="success">
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
  );
};

export default Profile;

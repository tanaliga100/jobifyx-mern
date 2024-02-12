import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Profile = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, gap: 10, alignItems: "center" }}>
      <Header title="Profile" subtitle="You can edit your prof" />
      <Button color="error" size="small" startIcon={<AccountCircleIcon />}>
        <Link to="#">Profile</Link>
      </Button>
    </Box>
  );
};

export default Profile;

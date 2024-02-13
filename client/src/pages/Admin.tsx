import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Admin = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, gap: 10, alignItems: "center" }}>
      <Header title="Admin" subtitle="The wildcard control" />
      <Link to="#" aria-disabled>
        <Button
          color="error"
          size="small"
          startIcon={<AdminPanelSettingsIcon />}
        >
          Admin
        </Button>
      </Link>
    </Box>
  );
};

export default Admin;

import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Stats = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, gap: 10, alignItems: "center" }}>
      <Header title="Stats" subtitle="All the records are here..." />
      <Link to="/dashboard/add-job">
        <Button color="error" size="small" startIcon={<AddToPhotosIcon />}>
          Add Job
        </Button>
      </Link>
    </Box>
  );
};

export default Stats;

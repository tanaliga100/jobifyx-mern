import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Stats = () => {
  return (
    <Box sx={{ display: "flex", flex: 1, gap: 10, alignItems: "center" }}>
      <Header title="Stats" subtitle="All the records are here..." />
      <Button color="error" size="small" startIcon={<AddToPhotosIcon />}>
        <Link to="/dashboard/add-job">Add Job</Link>
      </Button>
    </Box>
  );
};

export default Stats;

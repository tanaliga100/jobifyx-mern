import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDashboardContext } from "../layout/DashboardLayout";

const Logo = () => {
  const user = useDashboardContext();

  return (
    <Box sx={{ py: 2 }} fontSize={30} fontWeight={900}>
      <Link to={`${user ? "/dashboard" : "/"}`}>Jobifyx</Link>
    </Box>
  );
};

export default Logo;

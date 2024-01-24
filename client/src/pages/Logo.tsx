import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box sx={{ py: 2 }} fontSize={30} fontWeight={900}>
      <Link to="/">Jobifyx</Link>
    </Box>
  );
};

export default Logo;

//  {
//    routes.pathname === "/dashboard" ||
//      (routes.pathname === "/dashboard/*" && (
//        <Stack color="red">Nav Buttons</Stack>
//      ));
//  }

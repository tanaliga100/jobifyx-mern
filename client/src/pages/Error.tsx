import { Box, Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as Error;
  console.log("error", error);
  const errorMessage = (error && error.message) || error.data!;

  return (
    <Box
      sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}
      fontSize={20}
      fontWeight={900}
    >
      <Typography>Resource Not Found</Typography>
      <Typography variant="caption">{errorMessage}</Typography>
      <Link to="/">Home</Link>
    </Box>
  );
};

export default Error;

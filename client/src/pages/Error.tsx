import { Box, Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as Error;
  console.log(error);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errorMessage = (error && error.message) || (error as any);

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
      }}
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

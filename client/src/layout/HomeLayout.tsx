import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  // if (routes.pathname === "/dashboard") {
  //   return <p>authenticated</p>;
  // }

  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default HomeLayout;

{
  /* <Logo /> */
}
{
  /* {routes.pathname === "/dashboard" ||
            (routes.pathname === "/dashboard/*" && (
              <Stack color="red">Nav Buttons</Stack>
            ))} */
}

{
  /* <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            boxShadow: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        ></Box>
      </Container> */
}

export default function Navbar() {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //   }}
    // >
    <AppBar position="absolute" color="inherit">
      <Toolbar variant="regular">
        <Box
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              justifyContent: "space-between",
            }}
          >
            <ThemeToggler />
            <Divider orientation="vertical" flexItem />
            <Logout />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

import { AppBar, Box, Divider, Toolbar } from "@mui/material";
import Logout from "../components/Logout";
import ThemeToggler from "../components/ThemeToggler";
import Logo from "../pages/Logo";

import { Box, Container, Grid } from "@mui/material";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Logo from "../pages/Logo";
import Sidebar from "../pages/Sidebar";

export interface IContext {
  user: { name: string };
  toggleDarkTheme: () => void;
  logoutUser: () => void;
}
const DashboardContext = createContext({});

const DashboardLayout = () => {
  const navigate = useNavigate();
  const user = { name: "jordan100" };
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const logoutUser = async () => {
    console.log("logout user");
    toast.success("User Logout ");
    navigate("/");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Box>
        <Grid container sx={{ minHeight: "70vh" }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Logo />
            </Box>
          </Container>
          <Container
            maxWidth="xl"
            sx={{ display: "flex", height: "80dvh", pt: 3, gap: 3 }}
          >
            <Grid item xs={2}>
              {/* LEFT SIDE  */}
              <Sidebar />
            </Grid>
            <Grid item xs={10}>
              {/* RIGHT SIDE  */}
              <Header
                title="Title"
                subtitle="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ad.
          
          "
              />
              <Outlet />
            </Grid>
          </Container>
        </Grid>
      </Box>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

import { Box, Container, Grid } from "@mui/material";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Logo from "../pages/Logo";
import Sidebar from "../pages/Sidebar";
import { customFetch } from "../utils/custom-fetch";

// eslint-disable-next-line react-refresh/only-export-components
export const dashboardLoaders = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

export interface IContext {
  user: IUser;
  toggleDarkTheme: () => void;
  logoutUser: () => void;
}
const DashboardContext = createContext({});

export interface IUser {
  msg: string;
  profile: {
    DOB: string;
    age: null;
    email: string;
    firstName: string;
    gender: string;
    lastName: string;
    nationality: string;
    occupation: string;
    phoneNumber: string;
    role: string;
  };
}

const DashboardLayout = () => {
  const navigate = useNavigate();
  const user = useLoaderData() as unknown;

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const logoutUser = async () => {
    await customFetch.get("/auth/logout");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const msg = "User Logging Out...";
    toast(msg, {
      icon: "👋👋👋",
      duration: 1000,
    });
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
              <Outlet context={{ user }} />
            </Grid>
          </Container>
        </Grid>
      </Box>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

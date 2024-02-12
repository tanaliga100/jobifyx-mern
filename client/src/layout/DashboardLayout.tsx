import { Box, Container, Grid } from "@mui/material";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
import NestedList from "../pages/SidebarTemp";
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
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const logoutUser = async () => {
    await customFetch.get("/auth/logout");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const msg = "User Logs Out...";
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
        isDarkTheme,
        toggleTheme,
        logoutUser,
      }}
    >
      <Box>
        <Grid container sx={{ minHeight: "70vh" }}>
          <Box sx={{ height: "18dvh", width: "100dvw" }}>
            <Navbar />
          </Box>
          <Container
            maxWidth="xl"
            sx={{ display: "flex", gap: 1, height: "80dvh" }}
          >
            <Grid item xs={2}>
              {/* LEFT SIDE  */}
              <NestedList />
            </Grid>
            <Grid item xs={9.5}>
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

// export interface IContext {
//   user?: undefined | any;
//   isDarkTheme?: boolean;
//   toggleDarkTheme?: () => void;
//   logoutUser?: () => void | undefined;
// }

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => {
  return useContext(DashboardContext)!;
};

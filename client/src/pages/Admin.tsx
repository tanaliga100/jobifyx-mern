import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Box, Button } from "@mui/material";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { Link, redirect, useLoaderData } from "react-router-dom";
import AdminStats from "../components/AdminStats";
import Header from "../components/Header";
import { customFetch } from "../utils/custom-fetch";

// eslint-disable-next-line react-refresh/only-export-components
export const adminLoaders = async () => {
  try {
    const res = await customFetch.get(`/admin/dashboard`);
    const { obj, msg } = res.data;
    toast.success("ADMIN PAGE", {
      duration: 1000,
    });
    return { obj, msg };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorMessage = error.response.data.msg as any;
    toast.error(errorMessage, {
      duration: 1000,
    });
    return redirect("/dashboard");
  }
};

const AdminContext = createContext({});
const Admin = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { obj, msg } = useLoaderData() as any;

  return (
    <AdminContext.Provider value={{ obj, msg }}>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          gap: 10,
          alignItems: "center",
        }}
      >
        <Header title="Admin" subtitle="Admin Panel" />
        <Link to="#" aria-disabled>
          <Button
            color="error"
            size="small"
            startIcon={<AdminPanelSettingsIcon />}
          >
            Admin
          </Button>
        </Link>
      </Box>
      <Box sx={{ height: "10dvh" }}>
        <AdminStats />
      </Box>
    </AdminContext.Provider>
  );
};

export default Admin;

// eslint-disable-next-line react-refresh/only-export-components
export const useAdminContext = () => {
  return useContext(AdminContext);
};

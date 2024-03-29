import { createBrowserRouter } from "react-router-dom";
import DashboardLayout, { dashboardLoaders } from "./layout/DashboardLayout";
import HomeLayout from "./layout/HomeLayout";
import AddJob, { addJobAction } from "./pages/AddJob";
import Admin, { adminLoaders } from "./pages/Admin";
import AllJobs, { allJobsLoader } from "./pages/AllJobs";
import { deleteJobAction } from "./pages/DeleteJob";
import EditJob, { editJobAction, editJobLoader } from "./pages/EditJob";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Login, { actionLogin } from "./pages/Login";
import Profile, { editProfileAction } from "./pages/Profile";
import Register, { actionRegister } from "./pages/Register";
import Stats from "./pages/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: actionRegister,
      },
      {
        path: "login",
        element: <Login />,
        action: actionLogin,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoaders,
        children: [
          {
            index: true,
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "add-job",
            action: addJobAction,
            element: <AddJob />,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: "delete-job/:id",
            action: deleteJobAction,
          },
          {
            path: "profile",
            element: <Profile />,
            action: editProfileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoaders,
          },
        ],
      },
    ],
  },
]);

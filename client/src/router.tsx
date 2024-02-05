import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { createBrowserRouter, redirect } from "react-router-dom";
import DashboardLayout, { dashboardLoaders } from "./layout/DashboardLayout";
import HomeLayout from "./layout/HomeLayout";
import AddJob from "./pages/AddJob";
import Admin from "./pages/Admin";
import AllJobs from "./pages/AllJobs";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register, { MyParams } from "./pages/Register";
import Stats from "./pages/Stats";
import { customFetch } from "./utils/custom-fetch";

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
        action: async ({
          request,
        }: {
          request?: Request;
          params?: MyParams;
        }) => {
          const formData = await request?.formData();
          const data = Object.fromEntries(formData!);
          // sumit request here..
          try {
            const response = await customFetch.post("/auth/register", data);
            const res = response.data.msg;
            toast(res, {
              icon: "👏 👏 👏",
            });
            return redirect("/login");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            const errorMsg = error!.response?.data.msg as string;
            if (errorMsg) {
              toast(errorMsg, {
                icon: "👎 👎 👎 ",
                duration: 1000,
              });
            }
            return null;
          }
        },
      },
      {
        path: "login",
        element: <Login />,
        action: async ({ request }: { request: Request }) => {
          const formData = await request!.formData();
          const data = Object.fromEntries(formData);

          // submission here...
          try {
            const response: AxiosResponse<{ msg: string }> =
              await customFetch.post("/auth/login", data);
            const res = response.data.msg;
            toast(res, {
              icon: "👏 👏 👏",
              duration: 2000,
            });
            return redirect("/dashboard");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            const errorMsg = error!.response?.data.msg as string;
            if (errorMsg) {
              toast.error(errorMsg);
            }
            return null;
          }
        },
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
            path: "add-job",
            element: <AddJob />,
            action: async ({ request }: { request: Request }) => {
              const formData = await request.formData();
              const jobData = Object.fromEntries(formData);
              console.log("data", jobData);
              // submission here...
              try {
                const response = await customFetch.post("/jobs", jobData);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { data, msg } = await response.data;
                toast(msg, {
                  icon: "👏 👏 👏",
                  duration: 2000,
                });
                return redirect("/dashboard");
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } catch (error: any) {
                const errorMsg = error!.response?.data.msg as string;
                if (errorMsg) {
                  toast(errorMsg, {
                    icon: "👎 👎 👎 ",
                    duration: 2000,
                  });
                }
                return null;
              }
            },
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

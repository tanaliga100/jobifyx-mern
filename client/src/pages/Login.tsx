import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import FormRow from "../components/FormRow";
import Header from "../components/Header";
import { customFetch } from "../utils/custom-fetch";

// eslint-disable-next-line react-refresh/only-export-components
export const actionLogin = async ({ request }: { request?: Request }) => {
  const formData = await request!.formData();
  const data = Object.fromEntries(formData);
  // submission here...
  try {
    const response: AxiosResponse<{ msg: string }> = await customFetch.post(
      "/auth/login",
      data
    );
    const res = response.data.msg;
    toast(res, {
      icon: "👏 👏 👏",
      duration: 1000,
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
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Container
      fixed
      sx={{
        width: "30dvw",
        height: "100dvh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Form method="post">
        <Grid container direction="column" spacing={3} sx={{ py: 3 }}>
          <Grid item justifyContent="center" alignItems="center">
            <Header title="Login Form" subtitle="Need to authenticate" />
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <MdAlternateEmail size={20} />
            <FormRow
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your Email"
              defaultValue="sample@mail.com"
            />
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <TbPasswordUser size={20} />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              placeholder="Enter Password"
              type="password"
              name="password"
              defaultValue="secret"
            />
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Button
              variant="contained"
              type="submit"
              size="small"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait " : "Submit"}
            </Button>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Link to="/dashboard">
              <Button
                variant="contained"
                fullWidth
                type="submit"
                size="small"
                color="primary"
                sx={{ bgcolor: "seagreen" }}
              >
                Demo User
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Typography variant="body1" fontSize={15} textAlign="center">
          {" "}
          Dont have an account ? Please {"   "}
          <Link to="/register">
            <Typography variant="caption" px={1} fontWeight={700} color="error">
              Register
            </Typography>
          </Link>
        </Typography>
      </Form>
    </Container>
  );
};

export default Login;

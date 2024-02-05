import { Button, Container, Grid, Typography } from "@mui/material";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Form, Link, useNavigation } from "react-router-dom";
import FormRow from "../components/FormRow";
import Header from "../components/Header";
export interface MyParams {
  id?: string;
  name?: string;
  date?: Date;
}
// eslint-disable-next-line react-refresh/only-export-components
// export const actionRegister = async ({
//   request,
// }: {
//   request?: Request;
//   params?: MyParams;
// }) => {
//   const formData = await request?.formData();
//   const data = Object.fromEntries(formData!);
//   // sumit request here..
//   try {
//     const response = await customFetch.post("/auth/register", data);
//     const res = response.data.msg;
//     toast(res, {
//       icon: "👏 👏 👏",
//     });
//     return redirect("/login");
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     const errorMsg = error!.response?.data.msg as string;
//     if (errorMsg) {
//       toast(errorMsg, {
//         icon: "👎 👎 👎 ",
//         duration: 1000,
//       });
//     }
//     return null;
//   }
// };

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Container
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
            <Header
              title="Registration Form"
              subtitle="Need to fill up the form"
            />
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <MdAlternateEmail size={20} />
            <FormRow
              type="text"
              name="firstName"
              label="First Name"
              placeholder="Enter your First Name"
              defaultValue="Jordan"
            />
          </Grid>
          <Grid
            item
            xs={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <TbPasswordUser size={20} />
            <FormRow
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Enter your Last Name"
              defaultValue="Tanaliga"
            />
          </Grid>

          <Grid
            item
            xs={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <TbPasswordUser size={20} />
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
            <FormRow
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your Password"
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
              {isSubmitting ? "Submitting" : "Submit"}
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body1" fontSize={15} textAlign="center">
          {" "}
          Already have an account ? Please {"   "}
          <Link to="/login">
            <Typography variant="caption" px={1} fontWeight={700} color="error">
              Login
            </Typography>
          </Link>
        </Typography>
      </Form>
    </Container>
  );
};

export default Register;

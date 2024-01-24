import { Button, Container, Grid, Typography } from "@mui/material";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";
import Header from "../components/Header";
const Register = () => {
  return (
    <Container
      sx={{
        width: "30dvw",
        height: "100dvh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <form action="">
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
              name="firtName"
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
              type="text"
              name="location"
              label="Location"
              placeholder="Enter your Location"
              defaultValue="Philippines"
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
              defaultValue="123456"
            />
          </Grid>

          <Grid
            item
            xs={3}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Button variant="contained" type="submit" size="small" fullWidth>
              Submit
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
      </form>
    </Container>
  );
};

export default Register;

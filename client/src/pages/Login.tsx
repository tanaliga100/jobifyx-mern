import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";
import Header from "../components/Header";
const Login = () => {
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
      <form>
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
      </form>
    </Container>
  );
};

export default Login;

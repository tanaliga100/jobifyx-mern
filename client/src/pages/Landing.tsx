import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import svg from "../assets/landing.svg";

const Landing = () => {
  return (
    <Grid
      container
      sx={{
        height: "90dvh",
      }}
      gap={3}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={3}>
        <Box mb={2} sx={{ display: "flex", flexDirection: "column" }} gap={3}>
          <Typography variant="h2" fontSize={25} fontWeight={900}>
            <Typography
              component="p"
              color="teal"
              variant="h2"
              fontWeight={800}
            >
              Job{" "}
            </Typography>
            <Typography
              component="p"
              color="black"
              variant="h2"
              fontWeight={800}
            >
              Tracking
            </Typography>{" "}
            <Typography
              component="p"
              color="teal"
              variant="h2"
              fontWeight={800}
            >
              App
            </Typography>
          </Typography>
          <Typography variant="h2" fontSize={15}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor unde
            dolore enim consequuntur, quos doloribus eveniet nisi aperiam soluta
            accusamus.
          </Typography>
        </Box>
        <Link to="login">
          <Button variant="outlined" color="info" size="small">
            Proceed
          </Button>
        </Link>
      </Grid>
      <Grid item xs={7}>
        <Typography variant="body2" fontSize={15} fontWeight={900}>
          <img src={svg} alt="image" width={800} height={400} />
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Landing;

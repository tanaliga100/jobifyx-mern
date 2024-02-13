import imageOne from "../assets/1.svg";
import imageTwo from "../assets/2.svg";

import { Box, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useAdminContext } from "../pages/Admin";
export default function AdminStats() {
  const data = useAdminContext();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const users = data.obj[0];
  const jobs = data.obj[1];
  console.log("ctx", users, jobs);

  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 5 }}>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="overline" fontWeight={900}>
              USERS
            </Typography>
            <Typography variant="h3" color="text.secondary" component="div">
              {users.userLength}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, height: 500 }}
          image={imageOne}
          alt="Live from space album cover"
        />
      </Card>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="overline" fontWeight={900}>
              Jobs
            </Typography>
            <Typography variant="h3" color="text.secondary" component="div">
              {jobs.jobLength}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, height: 500 }}
          image={imageTwo}
          alt="Live from space album cover"
        />
      </Card>
    </Box>
  );
}

// <CardActionArea>
//   <CardMedia component="img" sizes="10" image={imageTwo} alt="green iguana" />
//   <CardContent>
//     <Typography gutterBottom variant="overline" component="div">
//       Jobs
//     </Typography>
//     <Typography variant="caption" color="text.secondary">
//       Lizards are a widespread group of squamate reptiles, with over
//     </Typography>
//   </CardContent>
// </CardActionArea>;

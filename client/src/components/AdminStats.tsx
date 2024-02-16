import { Box } from "@mui/material";
import imageOne from "../assets/1.svg";
import imageTwo from "../assets/2.svg";

import { useAdminContext } from "../pages/Admin";
import Stats from "./Stats";
export default function AdminStats() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = useAdminContext() as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const users = data.obj[0];
  const jobs = data.obj[1];

  return (
    <Box sx={{ display: "flex", gap: 5 }}>
      <Stats
        data={users.allUsers}
        length={users.userLength}
        placeHolder="Users"
        image={imageOne}
      />
      <Stats
        data={jobs.allJobs}
        length={jobs.jobLength}
        placeHolder="Jobs"
        image={imageTwo}
      />
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

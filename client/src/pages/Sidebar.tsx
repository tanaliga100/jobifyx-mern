import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logout from "../components/Logout.tsx";
import { ILinks, Links } from "../constants";

const Sidebar = () => {
  return (
    <Grid container direction="column" gap={10} justifyContent="center">
      <Grid item xs={8}>
        {Links.map(({ href, label, icon }: ILinks) => (
          <NavLink
            end
            key={href}
            to={href}
            className={({ isActive }) => (isActive ? ` active link` : "link")}
          >
            <Box>{icon}</Box>
            <Typography variant="h6" fontSize={15}>
              {label}
            </Typography>
          </NavLink>
        ))}
      </Grid>
      <Grid item xs={4}>
        <Logout />
      </Grid>
    </Grid>
  );
};

export default Sidebar;

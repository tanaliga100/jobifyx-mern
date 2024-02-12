import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ILinks, Links } from "../constants";

const Sidebar = () => {
  return (
    <>
      {Links.map(({ href, label, icon }: ILinks) => (
        <NavLink
          end
          key={href}
          to={href}
          className={({ isActive }) => (isActive ? ` active link }` : "link")}
        >
          <Box>{icon}</Box>
          <Typography variant="overline" fontSize={12} fontWeight={600}>
            {label}
          </Typography>
        </NavLink>
      ))}
    </>
  );
};

export default Sidebar;

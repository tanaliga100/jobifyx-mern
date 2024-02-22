/* eslint-disable @typescript-eslint/no-explicit-any */
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { FaAddressCard, FaBorderAll } from "react-icons/fa";
import { ImStatsBars2 } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useDashboardContext } from "../layout/DashboardLayout";

export default function NestedList() {
  const ctx = useDashboardContext() as any;
  const validUser = ctx?.user.profile.role === "ADMIN";

  const currentRoute = useLocation();
  const isActive = currentRoute.pathname.startsWith("/dashboard/edit-job/");

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        fontSize: "1.3rem",
      }}
      component="nav"
    >
      <NavLink end to="/dashboard">
        <ListItemButton>
          <ListItemIcon>
            <ImStatsBars2 />
          </ListItemIcon>
          <ListItemText primary="Stats" />
        </ListItemButton>
      </NavLink>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FaBorderAll />
        </ListItemIcon>
        <ListItemText primary="Jobs" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink to="/dashboard/all-jobs">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="All Jobs" />
            </ListItemButton>
          </NavLink>
          <NavLink to="/dashboard/add-job">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BookmarkAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Job" />
            </ListItemButton>
          </NavLink>
          <ListItemButton sx={{ pl: 4 }} disabled={!isActive}>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Edit Job" />
          </ListItemButton>
        </List>
      </Collapse>
      <NavLink to="/dashboard/profile">
        <ListItemButton>
          <ListItemIcon>
            <FaAddressCard />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </NavLink>
      <NavLink to="/dashboard/admin">
        <ListItemButton disabled={!validUser}>
          <ListItemIcon>
            <MdAdminPanelSettings />
          </ListItemIcon>
          <ListItemText primary="Admin" />
        </ListItemButton>
      </NavLink>
    </List>
  );
}

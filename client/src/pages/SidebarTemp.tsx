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

  const handleClick = (item: any) => {
    setOpen(!open);
    setActiveItem(item);
  };

  const [activeItem, setActiveItem] = React.useState("");

  // const handleClick = (item) => {
  //   setActiveItem(item);
  //   setOpen(!open);
  // };

  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          fontSize: "1.5rem",
        }}
        component="nav"
      >
      
        <NavLink end to="/dashboard">
          <ListItemButton
            sx={{
              color: activeItem === "" ? "red" : "inherit", // Change color to red if active, otherwise inherit
            }}
            selected={activeItem === ""}
            onClick={() => setActiveItem("")}
          >
            <ListItemIcon>
              <ImStatsBars2 />
            </ListItemIcon>

            <ListItemText
              primary="Stats"
              primaryTypographyProps={{
                sx: { fontWeight: 500 },
              }}
            />
          </ListItemButton>
        </NavLink>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <FaBorderAll />
          </ListItemIcon>
          <ListItemText
            primary="Jobs"
            primaryTypographyProps={{
              sx: { fontWeight: 500 },
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/dashboard/all-jobs">
              <ListItemButton
                sx={{
                  color: activeItem === "/all-jobs" ? "red" : "inherit", // Change color to red if active, otherwise inherit
                  pl: 4,
                }}
                selected={activeItem === "/all-jobs"}
                onClick={() => setActiveItem("/all-jobs")}
              >
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText
                  primary="All Jobs"
                  primaryTypographyProps={{
                    sx: { fontWeight: 500 },
                  }}
                />
              </ListItemButton>
            </NavLink>
            <NavLink to="/dashboard/add-job">
              <ListItemButton
                sx={{
                  color: activeItem === "/add-job" ? "red" : "inherit", // Change color to red if active, otherwise inherit
                  pl: 4,
                }}
                selected={activeItem === "/add-job"}
                onClick={() => setActiveItem("/add-job")}
              >
                <ListItemIcon>
                  <BookmarkAddIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Add Job"
                  primaryTypographyProps={{
                    sx: { fontWeight: 500 },
                  }}
                />
              </ListItemButton>
            </NavLink>
            <ListItemButton
              disabled={!isActive}
              sx={{
                color: activeItem === "/edit-job" ? "red" : "inherit", // Change color to red if active, otherwise inherit
                pl: 4,
              }}
              selected={activeItem === "/edit-job"}
              onClick={() => setActiveItem("/edit-job")}
            >
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText
                primary="Edit Job"
                primaryTypographyProps={{
                  sx: { fontWeight: 500 },
                }}
              />
            </ListItemButton>
          </List>
        </Collapse>
        <NavLink to="/dashboard/profile">
          <ListItemButton
            sx={{
              color: activeItem === "/profile" ? "red" : "inherit", // Change color to red if active, otherwise inherit
              pl: 2,
            }}
            selected={activeItem === "/profile"}
            onClick={() => setActiveItem("/profile")}
          >
            <ListItemIcon>
              <FaAddressCard />
            </ListItemIcon>
            <ListItemText
              primary="Profile"
              primaryTypographyProps={{
                sx: { fontWeight: 500 },
              }}
            />
          </ListItemButton>
        </NavLink>
        <NavLink to="/dashboard/admin">
          <ListItemButton
            disabled={!validUser}
            sx={{
              color: activeItem === "/admin" ? "red" : "inherit", // Change color to red if active, otherwise inherit
              pl: 2,
            }}
            selected={activeItem === "/admin"}
            onClick={() => setActiveItem("/admin")}
          >
            <ListItemIcon>
              <MdAdminPanelSettings />
            </ListItemIcon>
            <ListItemText
              primary="Admin"
              primaryTypographyProps={{
                sx: { fontWeight: 500 },
              }}
            />
          </ListItemButton>
        </NavLink>
      </List>
    </>
  );
}

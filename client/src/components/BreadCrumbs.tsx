import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

export default function BreadCrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        // underline="hover"
        to="/"
        color="inherit"
        // href="/"
      >
        Jobs
      </Link>
      <Link
        to="/"
        // underline="hover"
        color="inherit"
        // href="/material-ui/getting-started/installation/"
      >
        Single Job
      </Link>
    </Breadcrumbs>
  );
}

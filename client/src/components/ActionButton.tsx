import { IconButton, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function ActionButton({
  url,
  icon,
  label,
}: {
  url: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <Link to={url}>
      <Typography variant="button" fontWeight={700} color="error">
        {label}
      </Typography>
      <IconButton color="error">{icon}</IconButton>
    </Link>
  );
}

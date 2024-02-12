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
      <Typography variant="caption">{label}</Typography>
      <IconButton>{icon}</IconButton>
    </Link>
  );
}

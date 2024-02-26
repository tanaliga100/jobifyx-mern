import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Button, Typography } from "@mui/material";
import { useDashboardContext } from "../layout/DashboardLayout";

export default function ThemeToggler() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ctx = useDashboardContext() as any;
  return (
    <Box onClick={ctx.toggleTheme}>
      {ctx.isDarkTheme ? (
        <>
          <Button
            variant="contained"
            startIcon={<LightModeIcon sx={{ fontSize: "1.5rem" }} />}
            color="secondary"
          >
            <Typography variant="subtitle2" fontWeight={300}>
              Light
            </Typography>
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            color="info"
            startIcon={<DarkModeIcon sx={{ fontSize: "1.5rem" }} />}
          >
            <Typography variant="subtitle2" fontWeight={300}>
              Dark
            </Typography>
          </Button>
        </>
      )}
    </Box>
  );
}

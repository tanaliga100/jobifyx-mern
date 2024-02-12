import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Box, Button, Typography } from "@mui/material";
import { useDashboardContext } from "../layout/DashboardLayout";

export default function ThemeToggler() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ctx = useDashboardContext() as any;
  console.log("ctx", ctx);
  return (
    <Box onClick={ctx.toggleTheme}>
      {ctx.isDarkTheme ? (
        <>
          <Button
            variant="text"
            startIcon={<LightModeIcon sx={{ fontSize: "1.5rem" }} />}
            color="secondary"
          >
            <Typography variant="subtitle2" fontWeight={800}>
              Light
            </Typography>
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="text"
            startIcon={<DarkModeIcon sx={{ fontSize: "1.5rem" }} />}
          >
            <Typography variant="subtitle2" fontWeight={800}>
              Dark
            </Typography>
          </Button>
        </>
      )}
    </Box>
  );
}

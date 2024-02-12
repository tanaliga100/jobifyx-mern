import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { IContext, useDashboardContext } from "../layout/DashboardLayout";
const Logout = () => {
  const data = useDashboardContext() as IContext;
  const initial = data.user.profile.firstName.slice(0, 1);

  return (
    <Button size="small" color="success" onClick={() => data.logoutUser()}>
      <Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Avatar
            sx={{ width: 20, height: 20, bgcolor: "#37B5B6" }}
            alt="Jordan Tanaliga"
            src={initial}
          />
          <Typography variant="body1" fontSize={10} fontWeight={100}>
            {data.user && data.user.profile.firstName}
          </Typography>
          <Tooltip title="Logout">
            <IconButton>
              <PowerSettingsNewIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Stack>
    </Button>
  );
};

export default Logout;

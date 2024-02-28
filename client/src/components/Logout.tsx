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

  console.log("ctx", data);

  const initial = data.user.profile.firstName.slice(0, 1);
  const avatarImage = data.user?.profile?.avatar;

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
          {data?.user.profile.avatar ? (
            <Avatar
              sx={{ width: 40, height: 40, bgcolor: "#37B5B6" }}
              src={avatarImage}
            />
          ) : (
            <Avatar
              sx={{ width: 40, height: 40, bgcolor: "#37B5B6" }}
              src={initial}
            />
          )}
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

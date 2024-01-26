import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { IContext, useDashboardContext } from "../layout/DashboardLayout";
const Logout = () => {
  const data = useDashboardContext() as IContext;
  const initial = data.user.profile.firstName.slice(0, 1);

  return (
    <Button size="small" color="success" onClick={() => data.logoutUser()}>
      <Stack spacing={2}>
        <Avatar
          alt="Jordan Tanaliga"
          src={initial}
          sizes="small"
          sx={{ bgcolor: "#37B5B6" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
          }}
        >
          {/* <Typography variant="body1" fontSize={10} fontWeight={100}>
          {data.user && data.user.profile.firstName}
        </Typography> */}
          <LogoutIcon />
          <Typography variant="caption" fontSize={10} fontWeight={800}>
            Logout
          </Typography>
        </Box>
      </Stack>
    </Button>
  );
};

export default Logout;

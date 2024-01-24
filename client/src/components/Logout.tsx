import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Typography } from "@mui/material";
import { IContext, useDashboardContext } from "../layout/DashboardLayout";

const Logout = () => {
  const data = useDashboardContext() as IContext;
  console.log("data", data);

  return (
    <Button size="small" color="success" onClick={() => data.logoutUser()}>
      <LogoutIcon />
      <Typography variant="caption" fontSize={10} fontWeight={800}>
        Logout
      </Typography>
    </Button>
  );
};

export default Logout;

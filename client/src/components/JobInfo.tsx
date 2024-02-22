import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JobInfo = (props: { props: any | unknown }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
      }}
    >
      {/* <Typography variant="caption" color="olive">
        Created: {props.props.dateCreated}
      </Typography> */}
      <Typography variant="overline" color="secondary" fontSize={10}>
        <LocationOnIcon
          color="success"
          sx={{
            fontSize: "10px",
          }}
        />{" "}
        {props.props.jobLocation}
      </Typography>
      <Typography variant="caption" color="primary" fontSize={12}>
        <BusinessIcon
          color="warning"
          sx={{
            fontSize: "10px",
          }}
        />{" "}
        {props.props.company}
      </Typography>
    </Box>
  );
};

export default JobInfo;

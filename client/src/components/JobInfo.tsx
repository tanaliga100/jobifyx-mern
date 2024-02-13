import { Box, Typography } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JobInfo = (props: { props: any | unknown }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {/* <Typography variant="caption" color="olive">
        Created: {props.props.dateCreated}
      </Typography> */}
      <Typography variant="overline" color="secondary" fontSize={10}>
        {props.props.jobLocation}
      </Typography>
    </Box>
  );
};

export default JobInfo;

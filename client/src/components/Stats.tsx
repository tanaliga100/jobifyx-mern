/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Stats = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  data,
  placeHolder,
  length,
  image,
}: {
  data: any;
  placeHolder: string;
  length: number;
  image: any;
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxHeight: 100,
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto " }}>
          <Typography component="div" variant="overline" fontWeight={900}>
            {placeHolder}
          </Typography>
          <Typography
            variant="h3"
            color="text.secondary"
            component="div"
            fontWeight={900}
          >
            {length}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300, height: 300 }}
        image={image}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default Stats;

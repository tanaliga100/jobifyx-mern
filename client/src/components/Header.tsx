import { Box, Chip, Stack, Typography } from "@mui/material";

interface IHeader {
  title: string;
  subtitle: string;
  id?: string;
}

const Header = ({ title, subtitle, id }: IHeader) => {
  return (
    <Stack pb={3}>
      <Typography variant="body1" fontWeight={900} color="GrayText">
        {title}
      </Typography>
      <Typography variant="caption" component="p" color="CaptionText">
        {subtitle}
      </Typography>
      {id && (
        <Box
          sx={{
            display: "flex",
            py: 1,
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="caption" component="p" color="CaptionText">
            Job_ID :
          </Typography>
          <Chip label={id} variant="outlined" color="info" />
        </Box>
      )}
    </Stack>
  );
};

export default Header;

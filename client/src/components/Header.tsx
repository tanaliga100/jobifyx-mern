import { Stack, Typography } from "@mui/material";

interface IHeader {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: IHeader) => {
  return (
    <Stack pb={3}>
      <Typography variant="body1" fontWeight={900} color="GrayText">
        {title}
      </Typography>
      <Typography variant="subtitle2" component="p" color="Highlight">
        {subtitle}
      </Typography>
    </Stack>
  );
};

export default Header;

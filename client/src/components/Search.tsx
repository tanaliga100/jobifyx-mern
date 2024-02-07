import { Box, TextField } from "@mui/material";

const SearchContainer = () => {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <TextField
        id="outlined-basic"
        size="small"
        placeholder="Search for the jobs"
        variant="standard"
      />
      <TextField
        id="outlined-basic"
        size="small"
        placeholder="Search for the jobs"
        variant="standard"
      />
    </Box>
  );
};

export default SearchContainer;

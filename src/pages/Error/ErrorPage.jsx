import React from "react";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

const ErrorPage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography align="center" color={theme.palette.error.main} variant="h5">
        Sorry, Error Page!
        <br />
        <br />
        Please try again later..
      </Typography>
    </Box>
  );
};

export default ErrorPage;

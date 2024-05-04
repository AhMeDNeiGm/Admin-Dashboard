import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../components/shared/charts/Pie";
import Bar from "../../components/shared/charts/Bar";
import Geo from "./../../components/shared/charts/Geo";

const ThirdSection = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          mb={1}
          mt={2}
          ml={4}
          variant="h6"
          fontWeight={"bold"}
        >
          Campaign
        </Typography>

        <Pie isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight={"bold"}
          mb={1}
          mt={2}
          ml={4}
        >
          Sales Quantity
        </Typography>

        <Bar isDashbord={true} />
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default ThirdSection;

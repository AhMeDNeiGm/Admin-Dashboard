import React from "react";
import { Box } from "@mui/material";
import Geo from "../../components/shared/charts/Geo";
import Header from "../../components/shared/Header";

const GeographyChart = () => {
  return (
    <>
      <Header title="Geography" subTitle="Simple Geography Chart" />
      <Geo />
    </>
  );
};

export default GeographyChart;

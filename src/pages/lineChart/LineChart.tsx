import React from "react";
import Line from "../../components/shared/charts/Line";
import Header from "../../components/shared/Header";

const LineChart = () => {
  return (
    <>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Line />
    </>
  );
};

export default LineChart;

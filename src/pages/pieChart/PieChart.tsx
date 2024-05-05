import React from "react";
import Pie from "../../components/shared/charts/Pie";
import Header from "../../components/shared/Header";

const PieChart = () => {
  return (
    <>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />

      <Pie />
    </>
  );
};

export default PieChart;

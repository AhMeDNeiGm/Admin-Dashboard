import React from "react";
import Bar from "./../../components/shared/charts/Bar";
import Header from "../../components/shared/Header";

const BarChart = () => {
  return (
    <>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </>
  );
};

export default BarChart;

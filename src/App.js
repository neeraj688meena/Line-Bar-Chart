import "./styles.css";
import ReactECharts from "echarts-for-react";
import wineData from "../src/wineData.json";

const LineChart = () => {
  const data = wineData;
  const flavanoids = data.map((item) => item.Flavanoids);
  const ash = data.map((item) => item.Ash);

  const option = {
    title: {
      text: "Flavanoids vs Ash"
    },
    xAxis: {
      type: "value",
      name: "Flavanoids"
    },
    yAxis: {
      type: "value",
      name: "Ash"
    },
    series: [
      {
        data: data.map((item) => [item.Flavanoids, item.Ash]),
        type: "line"
      }
    ]
  };

  return <ReactECharts option={option} />;
};

const BarChart = () => {
  const data = wineData;
  const alcoholValues = [...new Set(data.map((item) => item.Alcohol))];
  const magnesiumValues = alcoholValues.map((alcohol) => {
    const filteredData = data.filter((item) => item.Alcohol === alcohol);
    const minMagnesium = Math.min(
      ...filteredData.map((item) => item.Magnesium)
    );
    return minMagnesium;
  });

  const option = {
    title: {
      text: "Minimum Magnesium by Alcohol Category"
    },
    xAxis: {
      type: "category",
      data: alcoholValues,
      name: "Alcohol Category"
    },
    yAxis: {
      type: "value",
      name: "Minimum Magnesium"
    },
    series: [
      {
        data: magnesiumValues,
        type: "bar"
      }
    ]
  };

  return <ReactECharts option={option} />;
};

export default function App() {
  return (
    <>
      <LineChart />
      <BarChart />
    </>
  );
}

"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function AreaChart() {
  const series = [
    {
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2024-04-07T00:00:00Z",
        "2024-04-09T00:00:00Z",
        "2024-04-11T00:00:00Z",
        "2024-04-13T00:00:00Z",
        "2024-04-15T00:00:00Z",
        "2024-04-19T00:00:00Z",
        "2024-04-21T00:00:00Z",
      ],
      crosshairs: {
        show: true, // KEEP crosshair
        stroke: {
          width: 0,
        },
      },
    },
    colors: ["#2563eb"],
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      intersect: false,
    },
  };

  return <Chart options={options} series={series} type="area" height={300} />;
}

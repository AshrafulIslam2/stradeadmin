import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import faker from "faker";

//data 1
export const data = {
  labels: [
    "Total User",
    "Total Products",
    "Total Orders",
    "Total Delivery",
    "Total Earning",
    "Total Cancel",
  ],
  datasets: [
    {
      label: "৳",
      data: [120000, 190000, 30000, 50000, 200000, 303000],
      backgroundColor: [
        "rgba(255, 159, 64, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgba(255, 159, 64, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 99, 132, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
//common for data 1 and data 2
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);
//data 2
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "S Trade",
    },
  },
};

//data 2
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octobar",
  "November",
  "December",
];

//data 2
export const data2 = {
  labels,
  datasets: [
    {
      label: "Total Order",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Total Cancel",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const PiChart = () => {
  return (
    <div className="grid grid-cols-3 gap-x-2 mt-12 items-center  mx-4">
      <div className="w-5/6 ">
        <Pie data={data} />
      </div>
      <div className="w-full col-span-2">
        <Bar options={options} data={data2} />
      </div>
    </div>
  );
};

export default PiChart;

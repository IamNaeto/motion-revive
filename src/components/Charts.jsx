import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const Charts = ({ activeTimeData, sedentaryTimeData }) => {
  const chartData = [
    { name: "Sun", active: activeTimeData ?? 0, sedentary: sedentaryTimeData ?? 0 },
    { name: "Mon", active: activeTimeData ?? 0, sedentary: sedentaryTimeData ?? 0 },
    { name: "Tues", active: activeTimeData ?? 0, sedentary: sedentaryTimeData ?? 0 },
    { name: "Wed", active: activeTimeData ?? 0, sedentary: sedentaryTimeData ?? 0 },
    { name: "Thurs", active: activeTimeData ?? 0, sedentary: sedentaryTimeData ?? 0 },
    { name: "Fri", active: activeTimeData ?? 0, sedentary: sedentaryTimeData ?? 0 },
    { name: "Sat", active: activeTimeData ?? 0, sedentary: sedentaryTimeData ?? 0 },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        width={500}
        height={200}
        data={chartData}
        margin={{
          top: 30,
          right: 30,
          left: 5,
          bottom: 5,
        }}
        barSize={30}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          fontFamily="Rubik"
          fontSize="14px"
          fontWeight="300"
        />
        <YAxis
          tick={{ fontFamily: "Rubik", fontSize: "14px", fontWeight: 300 }}
          domain={[0, "dataMax"]}
          ticks={[4, 8, 12, 16, 20, 24]}
          tickFormatter={(value) => `${value}hrs`}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="active" fill="#EEA962" radius={[20, 20, 0, 0]} />
        <Bar dataKey="sedentary" fill="#F3DCC4" radius={[20, 20, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;

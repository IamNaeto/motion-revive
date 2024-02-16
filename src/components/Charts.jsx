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

const data = [
  { name: "Sun", active: 10, sedentary: 6 },
  { name: "Mon", active: 3, sedentary: 13 },
  { name: "Tues", active: 2, sedentary: 9 },
  { name: "Wed", active: 8, sedentary: 2 },
  { name: "Thurs", active: 18, sedentary: 4 },
  { name: "Fri", active: 8, sedentary: 3 },
  { name: "Sat", active: 13, sedentary: 4 },
];
const tickFormatter = (tick) => {
  return `${tick}hrs`;
};

const Charts = () => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        width={500}
        height={200}
        data={data}
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
          ticks={[2, 4, 6, 8, 10, 12, 18, 24]}
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

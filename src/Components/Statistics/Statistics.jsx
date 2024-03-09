import React, { PureComponent, useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { getDonation } from "../Utillitys/localStroage";

const Statistics = () => {
  const [localData, setLocalData] = useState([]);
  const [items, setItems] = useState([]);
  useState(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, []);

  useEffect(() => {
    const donationLS = getDonation();
    setLocalData(donationLS);
  }, []);

  const data = [
    { name: "My Donation", value: localData.length },
    { name: "Total Donation", value: items.length },
  ];

  const COLORS = ["#05B010", "#FE2E09"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex text-black font-bold gap-12">
        <div className="text-black flex items-center gap-4  ">
          <h1> Your Donation</h1>{" "}
          <div className=" w-12 bg-[#05B010] rounded h-2"></div>{" "}
        </div>
        <div className="text-black flex items-center gap-4  ">
          <h1> Total Donation</h1>{" "}
          <div className=" w-12 bg-[#FE2E09] rounded h-2"></div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Statistics;

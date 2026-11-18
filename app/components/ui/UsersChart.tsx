"use client";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaWrench } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import ProgressBar from "./ProgressBar";
import { BarChart, Bar, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "1", users: 330 },
  { name: "2", users: 230 },
  { name: "3", users: 115 },
  { name: "4", users: 295 },
  { name: "5", users: 500 },
  { name: "6", users: 410 },
  { name: "7", users: 470 },
  { name: "8", users: 295 },
  { name: "9", users: 160 },
];

const UsersChart = () => {
  return (
    <div
      className="bg-linear-to-b from-[#060B2B]/74
    to-[#0A0E23]/71 rounded-[15px] p-5 w-full h-full
    min-w-0"
    >
      <div
        className="h-61.25 w-full overflow-hidden
    rounded-2xl bg-linear-to-r from-[#060C29]
    to-[#040C30]/50 p-5"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
            barCategoryGap="45%"
          >
            <YAxis
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#ffffff",
                fontSize: 11,
                fontWeight: 600,
              }}
              width={42}
            />

            <Bar
              dataKey="users"
              fill="#ffffff"
              barSize={8}
              radius={[5, 5, 5, 5]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='mb-4.5'>
        <h2 className="font-bold text-white text-lg mb-2">Active Users</h2>
        <span
          className="flex items-center gap-1 text-sm
            text-gray-400"
        >
          <span className="text-green-400 font-semibold">(+23)</span>
          than last week
        </span>
      </div>
      <div
        className="grid grid-cols-2 gap-8 w-full
          md:grid-cols-4"
      >
        <div className='w-fit'>
          <div className="flex items-center gap-3">
            <div
              className="bg-blue-500 p-2 rounded-lg
                text-white"
            >
              <IoWallet />
            </div>
            <span
              className="text-sm text-gray-400
                font-bold"
            >
              Users
            </span>
          </div>
          <h2
            className="text-lg font-bold text-white
              my-3"
          >
            32,984
          </h2>
          <ProgressBar value={65} />
        </div>
        <div className='w-fit'>
          <div className="flex items-center gap-3">
            <div
              className="bg-blue-500 p-2 rounded-lg
                text-white"
            >
              <BsFillRocketTakeoffFill />
            </div>
            <span
              className="text-sm text-gray-400
                font-bold"
            >
              Clicks
            </span>
          </div>
          <h2
            className="text-lg font-bold text-white
              my-3"
          >
            2.42m
          </h2>
          <ProgressBar value={85} />
        </div>
        <div className='w-fit'>
          <div className="flex items-center gap-3">
            <div
              className="bg-blue-500 p-2 rounded-lg
                text-white"
            >
              <FaShoppingCart />
            </div>
            <span className="text-sm text-gray-400 font-bold">Sales</span>
          </div>
          <h2
            className="text-lg font-bold text-white
              my-3"
          >
            2,400$
          </h2>
          <ProgressBar value={45} />
        </div>
        <div className='w-fit'>
          <div className="flex items-center gap-3">
            <div
              className="bg-blue-500 p-2 rounded-lg
              text-white"
            >
              <FaWrench />
            </div>
            <span
              className="text-sm text-gray-400
              font-bold"
            >
              Items
            </span>
          </div>
          <h2
            className="text-lg font-bold text-white
              my-3"
          >
            320
          </h2>
          <ProgressBar value={60} />
        </div>
      </div>
    </div>
  );
};

export default UsersChart;

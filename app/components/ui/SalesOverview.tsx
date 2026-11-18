"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", sales: 180, comparison: 500 },
  { month: "Feb", sales: 220, comparison: 170 },
  { month: "Mar", sales: 215, comparison: 165 },
  { month: "Apr", sales: 350, comparison: 270 },
  { month: "May", sales: 360, comparison: 210 },
  { month: "Jun", sales: 465, comparison: 250 },
  { month: "Jul", sales: 380, comparison: 245 },
  { month: "Aug", sales: 300, comparison: 205 },
  { month: "Sep", sales: 355, comparison: 110 },
  { month: "Oct", sales: 220, comparison: 145 },
  { month: "Nov", sales: 400, comparison: 170 },
  { month: "Dec", sales: 430, comparison: 130 },
];

const SalesOverview = () => {
  return (
    <div className='bg-linear-to-tr from-[#060B2B]/74
    to-[#0A0E23]/71 rounded-[15px] p-5 w-full h-full
    min-w-0'>
        <div className='mb-9'>
          <h2 className='text-white font-bold text-lg
          mb-3'>
             Sales overview
          </h2>
          <span className='text-gray-400 text-sm'>
            <span className="text-green-500
            font-semibold">(+5) more
            </span> in 2021
          </span>
        </div>
        <div className="h-47.5 xl:h-67.5 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 8,
              right: 0,
              left: -12,
              bottom: 0,
            }}
          >
            <defs>
              {/* Blue area gradient */}
              <linearGradient
                id="blueAreaGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#087BFA"
                  stopOpacity={0.95}
                />
                <stop
                  offset="45%"
                  stopColor="#087BFA"
                  stopOpacity={0.55}
                />
                <stop
                  offset="100%"
                  stopColor="#087BFA"
                  stopOpacity={0.02}
                />
              </linearGradient>

              {/* Cyan area gradient */}
              <linearGradient
                id="cyanAreaGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#16C6F5"
                  stopOpacity={0.35}
                />
                <stop
                  offset="100%"
                  stopColor="#16C6F5"
                  stopOpacity={0.01}
                />
              </linearGradient>
            </defs>

            {/* Horizontal grid lines */}
            <CartesianGrid
              vertical={false}
              stroke="#29466F"
              strokeDasharray="3 3"
              strokeOpacity={0.8}
            />

            {/* Months */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#C3D2E8",
                fontSize: 8,
              }}
              tickMargin={12}
              interval={0}
            />

            {/* Values */}
            <YAxis
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#C3D2E8",
                fontSize: 8,
              }}
              width={30}
            />

            {/* Custom tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#071630",
                border: "1px solid #1B4C87",
                borderRadius: "10px",
                color: "#FFFFFF",
                fontSize: "11px",
              }}
              labelStyle={{ color: "#AFC5E3" }}
              itemStyle={{ padding: "2px 0" }}
            />

            {/* Upper blue area */}
            <Area
              type="monotone"
              dataKey="comparison"
              stroke="#087BFA"
              strokeWidth={2}
              fill="url(#blueAreaGradient)"
              activeDot={false}
              dot={false}
              isAnimationActive={false}
            />

            {/* Lower cyan area */}
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#16C6F5"
              strokeWidth={2}
              fill="url(#cyanAreaGradient)"
              activeDot={false}
              dot={false}
              isAnimationActive={false}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SalesOverview
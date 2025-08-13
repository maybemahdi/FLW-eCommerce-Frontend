"use client";

import earningData from "@/dummy-data/dummyEarnings";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Custom Tooltip component for Recharts
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className="p-2 bg-white rounded-md shadow-md text-sm text-gray-700 border border-gray-200">
        <p className="font-semibold mb-1">{`Month: ${label}`}</p>
        <p>{`Total sale: $${dataPoint["earning"]}`}</p>
      </div>
    );
  }
  return null;
};

const EarningReport = () => {
  const [selectedYear, setSelectedYear] = useState(dayjs().year().toString());
  const handleYearChange = (date: Dayjs | null, dateString: any) => {
    setSelectedYear(dateString);
  };

  // Calculate dynamic Y-axis domain
  const { minValue, maxValue } = useMemo(() => {
    const earnings = earningData.map((item) => item.earning);
    const min = Math.min(...earnings);
    const max = Math.max(...earnings);

    // Add some padding to the range
    const padding = (max - min) * 0.1;
    const minValue = Math.max(0, Math.floor((min - padding) / 10000) * 10000);
    const maxValue = Math.ceil((max + padding) / 10000) * 10000;

    return { minValue, maxValue };
  }, [earningData]);

  return (
    <div className="bg-white rounded-md shadow-sm p-6 md:p-8 border border-gray-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Earning Report
        </h2>

        <div className="flex gap-3">
          {/* Year picker */}
          <DatePicker
            onChange={handleYearChange}
            picker="year"
            defaultValue={dayjs(selectedYear, "YYYY")} // current year
            className="w-20"
            size="middle"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={earningData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            // onMouseLeave={handleMouseLeave}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "#6b7280" }}
              dy={10}
            />
            <YAxis
              domain={[minValue, maxValue]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: "#6b7280" }}
              tickFormatter={(value: number) => (value / 1000).toFixed(0)}
              dx={-10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
            />
            <Bar dataKey="earning" fill="#111827" radius={40} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningReport;

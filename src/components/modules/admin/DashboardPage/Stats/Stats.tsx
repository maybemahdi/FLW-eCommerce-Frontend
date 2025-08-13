import React from "react";

const Stats = ({
  stats,
  isLoading,
  isFetching,
}: {
  stats: any;
  isLoading?: boolean;
  isFetching?: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat: any, index: number) => (
        <div
          key={index}
          className="bg-white p-4 rounded-md shadow-md flex items-center justify-between hover:translate-y-[-5px] transition-transform duration-300"
        >
          <div className="flex flex-col gap-5">
            <span className="text-2xl font-bold mr-2">{stat.icon}{" "}{stat.value}</span>
            <span className="text-gray-600">{stat.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

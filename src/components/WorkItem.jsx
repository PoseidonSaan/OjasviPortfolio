import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-[#F6EDE3]">
      <li className="mb-10 ml-4 ">
        <div className="absolute w-3 h-3 bg-[#F6EDE3] rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm text-[#F6EDE3] ">
          <span className="inline-block px-2 py-1 font-semibold bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] text-[#404041] rounded-lg">
            {year}
          </span>
          <span className="text-2xl font-bold">{title}</span>
          <span className="text-lg italic">{duration}</span>
        </p>
        <p className="text-[#F6EDE3]">{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;

import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2023-current",
    title: "Saira IoT Solutions Private Limited.",
    duration: "2 months",
    details:
      "Started working as a web-development intern at Saira IoT Solutions Private Limited.",
  },
  {
    year: "2022",
    title: "Chambers of Vaibhav Srivastava",
    duration: "2 month",
    details:
      "During my internship at the Chambers of Vaibhav Srivastava, I built a website from scratch using React.js and Tailwind CSS. With guidance, I conceptualized the design, coded dynamic interfaces with React.js, and employed Tailwind CSS for efficient styling. I delivered a visually appealing website that exceeded client expectations.",
  },
];
const Work = () => {
  return (
    <div id="work" className="bg-[#404041] w-full h-full">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#F6EDE3] capitalize mb-4 ">
          work
        </h1>
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;

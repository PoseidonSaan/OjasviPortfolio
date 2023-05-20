import React from "react";
import ProjectItem from "./ProjectItem";
import brokering from "../assets/brokering.png";
import slotter from "../assets/slotter.png";
import explo from "../assets/Explo.png";

const Projects = () => {
  return (
    <div className="bg-[#404041] w-full h-full]">
      <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
        <h1 className="text-4xl font-bold text-center text-[#F6EDE3]">
          {" "}
          Projects{" "}
        </h1>
        <p className="text-left italic py-8 text-[#F6EDE3]">
          Through React.js, I have built engaging and user-friendly web
          applications with dynamic functionalities. Leveraging JavaScript, I
          have developed interactive features that enhance the user experience.
          Additionally, I have applied my knowledge of machine learning to
          create innovative solutions, including predictive models and data
          analysis tools. Explore my Projects section to witness the diverse
          range of projects that demonstrate my skills in these technologies.
        </p>
        <div className="grid sm:grid-cols-2 gap-12 ">
          <ProjectItem
            img={brokering}
            title="brokerage app"
            language="ReactJs"
          />
          <ProjectItem
            img={explo}
            title="explo app"
            language="ReactJs/Python"
          />
          <ProjectItem
            img={slotter}
            title="slotter app"
            language="JavaScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

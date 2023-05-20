import React from "react";

const ProjectItem = ({ img, title, language, projectLink }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-slate-700 rounded-xl group hover:bg-black/60 hover:ease-in hover:duration-400">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10 transition-all ease-in duration-400"
      />
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-[#F6EDE3] font-sans tracking-wider text-center capitalize">
          {" "}
          {title}{" "}
        </h3>
        <p className="pb-4 pt-2 text-[#F6EDE3] text-center text-bold italic">
          {language}
        </p>
        <a href="https://github.com/PoseidonSaan" target="blank">
          <p className="text-center p-3 rounded-lg bg-[#F6EDE3] text-black font-bold cursor-pointer text-lg capitalize">
            more info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;

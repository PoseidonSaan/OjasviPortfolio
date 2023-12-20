import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      {!nav && (
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer fill-[#F6EDE3]"
        />
      )}
      {nav && (
        <RxCross1
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer fill-[#F6EDE3]"
        />
      )}
      {nav ? (
        <div className="h-screen w-full fixed bg-transparent/60 flex flex-col justify-center items-center z-20 ease-in duration-300">
          <a
            onClick={handleNav}
            href="#main"
            className="flex flex-row w-[75%] justify-center items-center rounded-full shadow-lg bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-75"
          >
            <AiOutlineHome size={20} />
            <span className="pl-2 capitalize">home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="flex flex-row w-[75%] justify-center items-center rounded-full shadow-lg bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-75"
          >
            <GrProjects size={20} />
            <span className="pl-2 capitalize">work</span>
          </a>
          <a
            onClick={handleNav}
            href="#project"
            className="flex flex-row w-[75%] justify-center items-center rounded-full shadow-lg bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-75"
          >
            <AiOutlineProject size={20} />
            <span className="pl-2 capitalize">projects</span>
          </a>
          <a
            onClick={handleNav}
            href="https://drive.google.com/file/d/1svNFyk3y1-oh8s7Vi6qkpN35yMJwr6X7/view?usp=sharing"
            target="blank"
            className="flex flex-row w-[75%] justify-center items-center rounded-full shadow-lg bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-75"
          >
            <BsPerson size={20} />
            <span className="pl-2 capitalize">resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="flex flex-row w-[75%] justify-center items-center rounded-full shadow-lg bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4  cursor-pointer hover:scale-110 ease-in duration-75"
          >
            <AiOutlineMail size={20} />
            <span className="pl-2 capitalize">contact</span>
          </a>
        </div>
      ) : (
        <div></div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg border-[#E26274] border-double bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#project"
            className="rounded-full shadow-lg bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="https://drive.google.com/file/d/1K2cqeHp9wR9QJly4kSL9AvxWesQQCA-W/view?usp=sharing"
            target="blank"
            className="rounded-full shadow-lg bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gradient-to-b from-[#D3CAE2] to-[#E6C17A] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

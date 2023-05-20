import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="bgimg"
        className="w-full h-screen object-cover"
      ></img>
      <div className="w-full h-screen absolute top-0 left-0 bg-[#404041]/70">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-[#F6EDE3]">
            I'm Ojasvi
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-[#F6EDE3]">
            I'm a
            <TypeAnimation
              sequence={[
                "Full-stack Developer", // Types 'One'
                2000, // Waits 1s
                "Musician", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Coder", // Deletes 'Two' and types 'Three'
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
            />
          </h2>
          <div className="flex justify-between max-w-[200px] w-full pt-6">
            <a href="https://www.linkedin.com/in/ojasvi-kun/" target="blank">
              <FaLinkedin className="cursor-pointer fill-[#F6EDE3]" size={30} />
            </a>
            <a href="https://twitter.com/PoseidonKun" target="blank">
              <FaTwitter className="cursor-pointer fill-[#F6EDE3]" size={30} />
            </a>
            <a href="https://www.instagram.com/ojasvi_kun/" target="blank">
              <FaInstagram
                className="cursor-pointer fill-[#F6EDE3]"
                size={30}
              />
            </a>
            <a href="https://github.com/PoseidonSaan" target="blank">
              <FaGithub className="cursor-pointer fill-[#F6EDE3]" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

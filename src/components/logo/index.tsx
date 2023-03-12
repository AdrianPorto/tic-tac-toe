import React from "react";
import { Ubuntu } from "@next/font/google";
import "animate.css";
// import { Container } from './styles';
const rubik = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});
const Logo: React.FC = () => {
  return (
    <div
      className={` flex flex-col justify-center text-6xl items-center content-center absolute top-[1vw] left-[50%] right-[50%] text-white font-extrabold  ${rubik.className} `}
      style={{
        WebkitTextStroke: " 1px  #000",
        animation: "running",
      }}
    >
      <div className="flex flex-row   text-red-700 animate__animated animate__pulse animate__delay-1s animate__infinite	">
        <div className="-rotate-12 mt-2">T</div>
        <div className="-rotate-0 ml-2 mr-2">i</div>
        <div className="rotate-12 mt-2">c</div>
      </div>
      <div className="flex flex-row  text-green-600 animate__animated animate__pulse animate__delay-1s  animate__infinite	">
        <div className=" mt-2">T</div>
        <div className=" ml-2 mr-2">a</div>
        <div className=" mt-2">c</div>
      </div>
      <div className="flex flex-row  text-red-700 animate__animated animate__pulse animate__delay-1s animate__infinite	">
        <div className="rotate-12 mt-2">T</div>
        <div className="mt-2 ml-2 mr-2">o</div>
        <div className="-rotate-12 mt-2">e</div>
      </div>
    </div>
  );
};

export default Logo;

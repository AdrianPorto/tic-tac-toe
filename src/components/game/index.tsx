import { Html } from "next/document";
import React, { useState } from "react";
import Score from "../score";

// import { Container } from './styles';
interface Props {
  setUser: (value: string) => void;
  setWins: (value: number) => void;
  setLosers: (value: number) => void;
  setPositions: (value: [9]) => void;
  setChance: (value: boolean) => void;

  isX: (value: boolean) => void;
  x: boolean;
  chance: boolean;
  user: string;
  wins: number;
  losers: number;
}
function test() {
  let doc = document.getElementById("dv1") as HTMLDivElement;
  doc.removeAttribute("style");

  doc.setAttribute("class", "dvX , text-red-600  duration-200 scale");
}

const Game: React.FC<Props> = ({
  setUser,
  setWins,
  setLosers,
  setPositions,
  setChance,
  chance,
  user,
  wins,
  losers,
  isX,
}) => {
  return (
    <div className=" w-full h-full">
      <div className="flex  justify-start content-start">
        <Score
          user={user}
          setUser={setUser}
          wins={wins}
          setWins={setWins}
          losers={losers}
          setLosers={setLosers}
        ></Score>
      </div>

      <div className="flex content-center justify-center ">
        <div className="" id="grid1">
          <div id="dvX"></div>
        </div>
        <div id="barRow1"></div>
        <div className="" id="grid2" onClick={() => {}}></div>
        <div id="barCol1"></div>
        <div className="" id="grid3" onClick={() => {}}></div>
        <div id="barRow2"></div>
        <div className="" id="grid4"></div>
        <div id="barCol2"></div>
        <div className="" id="grid5"></div>
        <div className="" id="grid6"></div>
        <div className="" id="grid7"></div>
        <div className="" id="grid8"></div>
        <div className="" id="grid9"></div>
      </div>
    </div>
  );
};

export default Game;

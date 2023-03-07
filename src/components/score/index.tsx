import React from "react";

// import { Container } from './styles';
interface Props {
  setUser: (value: string) => void;
  setWins: (value: number) => void;
  setLosers: (value: number) => void;
  user: string;
  wins: number;
  losers: number;
}

const Score: React.FC<Props> = ({
  setUser,
  setWins,
  setLosers,
  user,
  wins,
  losers,
}) => {
  return (
    <div className="w-52 h-[115px] bg-white rounded-xl">
      <div className="flex flex-col ">
        <p className={"text-center mt-2 text-lg font-bold "} id="pontuacao">
          Pontuação
        </p>
        <div className="flex flex-col p-2 pl-5">
          <span className="text-green-700 text-xl font-bold" id="pontuacao">
            Vitorias: {wins}
          </span>
          <span className="text-red-700 text-xl " id="pontuacao">
            Percas: {losers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Score;

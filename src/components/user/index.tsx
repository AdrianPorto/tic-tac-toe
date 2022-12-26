import React from "react";

// import { Container } from './styles';
interface Props {
  setUser: (value: string) => void;
  setGameStart: (value: boolean) => void;
  gameStart: any;
  user: any;
}

const User: React.FC<Props> = ({ setUser, setGameStart, user }) => {
  function atualizar(e: String) {
    user = e;
  }
  console.log(user);
  return (
    <div className="bg-white h-52 w-72 rounded-xl flex justify-center content-center">
      <div className="mt-10">
        <label
          className="text-black flex justify-center content-center"
          id="label"
        >
          <input
            type="text"
            name=""
            id="inputNome"
            required
            onChange={(e) => {
              atualizar(e.target.value);
              console.log(user);
            }}
            className="w-60 h-10 border border-gray-600 rounded-lg text-black p-2"
          />{" "}
          <span id="nome" className="font-thin font-medium">
            Nome
          </span>
        </label>
        <div className="flex justify-center">
          <button
            className={`w-32 h-10  bg-green-600 rounded-full text-white mt-10 cursor-pointer 
       
            `}
            disabled={user == null}
            onClick={() => {
              console.log(user);
              setGameStart(true);
            }}
          >
            Pronto
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;

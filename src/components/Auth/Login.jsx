import React from "react";
import { useState } from "react";

const Login = ({handleLogin}) => {
  const sumitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" border-2 border-emerald-500 p-10 rounded-xl">
        <form
          onSubmit={(e) => sumitHandler(e)}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <h1 className="text-3xl text-emerald-500 font-bold mb-4">Login</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="border-2 border-emerald-500 rounded-full px-4 py-2 text-white outline-none placeholder:text-gray-400"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            className="border-2 border-emerald-500 rounded-full px-4 py-2 text-white outline-none placeholder:text-gray-400"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <button className="bg-emerald-500 rounded-full  py-2 w-full text-white text-xl ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

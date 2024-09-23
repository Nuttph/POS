"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

//icon
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Main = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const [vaId, setVaId] = useState<boolean>(false);
  const [vaPass, setVaPass] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log(id, pass);
    if (id != "" && pass != "") {
      sessionStorage.setItem("key", "true");
      sessionStorage.setItem("id", id);
      router.push("/pos");
    }
    if (id == "") {
      setVaId(true);
    }
    if (pass == "") {
      setVaPass(true);
    }
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-green-400 flex items-center justify-center flex-col">
        <h1 className="font-bold text-[40px]" id="Login">
          POS by Nuttaphon
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-2"
        >
          <label className="w-full flex justify-between gap-10 items-center text-[25px]">
            ID{" "}
            <input
              type="text"
              value={id}
              onChange={(e) => {
                if (id != "") {
                  setVaId(false);
                }
                setId(e.target.value);
              }}
              className={`px-[10px] rounded-md outline-none duration-[0.3s] ${
                vaId && "bg-red-200"
              }`}
            />
          </label>
          <label className="w-full flex justify-between gap-10 items-center text-[25px] relative">
            PASSWORD{" "}
            <input
              type={`${showPass ? "text" : "password"}`}
              value={pass}
              onChange={(e) => {
                if (pass != "") {
                  setVaPass(false);
                }
                setPass(e.target.value);
              }}
              className={`px-[10px] rounded-md outline-none duration-[0.3s] ${
                vaPass && "bg-red-200"
              }`}
            />
            <div
              className="absolute right-[10px] text-[20px] text-gray-600 cursor-pointer"
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </label>
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="bg-green-800 text-white text-[27px] rounded-md cursor-pointer hover:bg-green-700 duration-[0.3s] text-center"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Main;

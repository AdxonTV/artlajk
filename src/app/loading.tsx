
import React from "react";
import Cursor from "@/components/cursor";
const Loading = () => {


  return (
    <div className="w-full h-[100vh] bg-[#c7a6ff]  text-black flex justify-center items-center text-[100px] fixed z-[1000000] opacity-100 ">
    <Cursor scale="500px"></Cursor>
      <div className="text-[100px] text-white">Ładowanie Zawartości</div>
    </div>
  );
};

export default Loading;

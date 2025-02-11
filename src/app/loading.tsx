"use client"
import React, { useState, useEffect } from "react";
import SsAuto from "@/components/SsAuto";

const Loading = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="w-full h-[100vh] text-black flex justify-center items-center text-[100px] opacity-30 ">
      (...)
    </div>
  );
};

export default Loading;

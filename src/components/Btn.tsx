import React from "react";

interface face {
  id: string;

  leftIcon?: React.ReactNode;
  title: string;
  rightIcon?: React.ReactNode;
}
const Btn: React.FC<face> = ({ id, title, rightIcon, leftIcon }) => {
  return (
    <button
      id={id}
      className="group relative z-10 w-fit cursor-pointer o overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black"
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden  text-[15px] ">
        <div className="translate-y-0 font-medium skew-y-0  transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute font-medium translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </button>
  );
};

export default Btn;

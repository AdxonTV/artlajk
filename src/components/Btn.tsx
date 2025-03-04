import Link from "next/link";
import React from "react";

interface face {
  id: string;
  link?: string;
  leftIcon?: React.ReactNode;
  title: string;
  rightIcon?: React.ReactNode;
}




const handleClick = ()=>{
  window.scrollTo({top:0})
}
const Btn: React.FC<face> = ({ id, title, rightIcon, leftIcon, link }) => {
  return (
    <Link href={link || ""} onClick={handleClick} scroll={true}>
      <button
        id={id}
        className="group border-4  items-center border-violet-500 relative flex z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-700 border-[#8238f93d] duration-200 transition-all hover:bg-violet-50 px-7 py-3 text-black"
      >
        <div className="">
        {leftIcon}</div>

        <span className="relative inline-flex overflow-hidden   text-[15px] ">
          <div className="translate-y-0 font-medium skew-y-0 text-white transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
            {title}
          </div>
          <div className="absolute font-medium translate-y-[164%] skew-y-12 transition text-black duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {title}
          </div>
        </span>

        {rightIcon}
      </button>
    </Link>
  );
};

export default Btn;

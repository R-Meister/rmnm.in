import React from "react";

const Education = ({ imgUrl, title, stream, period }) => {
  return (
    <div className="flex items-start justify-between mt-4 text-sm md:text-md">
      <div className="flex items-center gap-6 ">
        <div className="bg-white">
          <img src={imgUrl} alt="" className="h-12 w-12 rounded-[100%]" />
        </div>
        <div className=" w-[140px] sm:w-[100%]">
          <p className="font-bold">{title}</p>
          <p>{stream}</p>
        </div>
      </div>

      <div className="text-neutral-400">
        <p>{period}</p>
      </div>
    </div>
  );
};

export default Education;

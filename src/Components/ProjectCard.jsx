import { useState } from "react";
import IssencialIcon from "../assets/IssencialIcon/IssencialIcon";

const ProjectCard = (props) => {
  return (
    <div>
      <div className="relative max-w-md min-h-[610px] bg-[#121112] border border-[#28282B] rounded-2xl p-5 md:px-10 md:py-9">
        <p className="text-zinc-400 geist font-semibold mb-4">
          {props.Section}
        </p>
        <img className="h-35 w-90" src={props.img} alt="" />
        <div className="mt-3 mb-2">
          <a href={props.links}>
            <h1 className="text-zinc-200  geist font-semibold text-[18px] giest mt-1">
              {props.Name}
              <span className=" ml-3 inline-flex items-center bg-[#1D1D1F] p-2 rounded-2xl text-[10px]">
                <span
                  className={`animate-ping inline-block w-3 h-3 rounded-full ${
                    props.active ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </span>
            </h1>
          </a>
          <p className="text-zinc-400 geist font-semibold text-[12px] ">
            {props.Categoery}
          </p>
          <p className="text-zinc-400 geist font-semibold ">{props.date}</p>
        </div>
        <p className="text-zinc-200 geist font-semibold text-[18px] edu-sa-beginner">
          {props.Summery}
        </p>
        <div className="flex gap-2 flex-wrap">
          {props.labels.map((label, index) => (
            <span
              key={index}
              className="min-w-10 w-15 h-8 mt-2 text-[12px] bg-[#141314] border rounded-xl border-[#26252C] text-white flex items-center justify-center px-8"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="w-10 h-10 bg-[#141314] border border-[#26252C] rounded-2xl absolute flex right-6 bottom-6">
          <img onClick={props.onNextClick} src={IssencialIcon.Arrow} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectCard;

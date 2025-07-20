import React from "react";
import toolicons from "../assets/ToolsIcon/toolsicon";

const Tools = (props) => {
  const { Icon, Section } = props;

  return (
    <div>
      <div className={props.BoxClass}>
        <p className="text-zinc-400 geist font-semibold md:ml-5">{Section}</p>
        <div className="grid grid-cols-3 gap-5 lg:gap-y-8 mt-7 md:mt-6 place-items-center ">
          {toolicons.map((socialLink) => (
            <a href={socialLink.url}>
              <img
                key={socialLink.name}
                src={socialLink.icon}
                alt={socialLink.name}
                className={props.className}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;

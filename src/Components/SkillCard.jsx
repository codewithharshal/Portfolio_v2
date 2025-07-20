import React from "react";

const SKillCard = (props) => {
  const { Icon, Section } = props;
  return (
    <div>
      <div className="max-w-md min-h-[290px] bg-[#121112] border border-[#28282B] rounded-2xl p-5 md:px-10 md:py-10">
        <p className="text-zinc-400 geist font-semibold md:ml-3 ">{Section}</p>
        <div className="grid grid-cols-3 gap-5 lg:gap-y-8 mt-7 md:mt-6 place-items-center">
          {Object.entries(Icon).map(([name, src]) => (
            <img key={name} src={src} alt={name} className={props.className} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SKillCard;

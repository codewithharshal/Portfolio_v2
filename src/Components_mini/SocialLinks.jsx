import React from "react";
import SocialCard from "../Components/SocialCard";
import icons from "../assets/SocialIcon/SocialIcon";

const SocialLinks = (props) => {
  return (
    <div>
      <SocialCard
        BoxClass="max-w-md min-h-[290px] bg-[#121112] border border-[#28282B] rounded-2xl p-5 md:px-10 md:py-10"
        className="w-15 h-15 bg-[#141314] border rounded-xl border-[#26252C] text-white flex items-center justify-center p-4 "
        Section="Social Links"
        Icon={{
          github: icons.github,
          linkedIn: icons.linkedin,
          mail: icons.mail,
        }}
      />
    </div>
  );
};

export default SocialLinks;

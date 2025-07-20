import React from "react";
import socialLinks from "../assets/SocialIcon/SocialIcon";

const SocialCard = (props) => {
  const { Icon, Section } = props;

  return (
    <div>
      <div className={props.BoxClass}>
        <p className="text-zinc-400 geist font-semibold">{Section}</p>
        <div className="grid grid-cols-3 gap-5 mt-7 lg:gap-y-8  md:mt-6 place-items-center">
          {socialLinks.map((socialLink) => (
            <a key={socialLink.name} href={socialLink.url}>
              <img
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

export default SocialCard;

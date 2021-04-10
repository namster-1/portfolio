import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const SocialNetworks: React.FC = (): JSX.Element => {
  const iconStyle = {
    height: 50,
    width: 50,
  };

  return (
    <div>
      <a href="https://www.facebook.com/kote.gvarjaladze.1/">
        <FaFacebook style={iconStyle} />
      </a>
      <a href="https://github.com/namster-1" className="ml-5">
        <AiFillGithub style={iconStyle} />
      </a>
    </div>
  );
};

export default SocialNetworks;

import React from "react";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/raeseanwhite/"
      >
        <img src={LinkedIn} alt="linkedIn" />
      </a>
      <a
        href="https://github.com/ReyesxRoyal/atlas-react-and-jsx"
      >
        <img src={GitHub} alt="gitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;

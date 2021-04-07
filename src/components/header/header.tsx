import React from "react";
import "./style.css";
// import ReactTypingEffect from "react-typing-effect";

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header-container">
      <div className="header">
        <p className="h1">Hello, I am kote gvarjaladze</p>
        {/* <ReactTypingEffect
          text={["Front-End-developer"]}
          eraseSpeed={100}
          className="h1 d-block"
          eraseDelay={300}
          speed={100}
          typingDelay={100}
        /> */}

        <button className="btn btn-lg btn-dark mt-3">view my work</button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import myPhoto from "../../images/myPhoto.jpg";
import "./style.css";
import Image from "react-bootstrap/Image";
import * as Bootsrap from "react-bootstrap";

interface Span {
  skill: string;
  progress: number;
}

const AboutMe: React.FC = (): JSX.Element => {
  const Span = ({ skill, progress }: Span): JSX.Element => {
    return (
      <div>
        <div className="d-flex justify-content-between w-100 h-100">
          <span>{skill}</span>
          <span>{progress}%</span>
        </div>
        <div className={`bg-primary w-${progress} h-100`}>
          <hr className="hr" />
        </div>
      </div>
    );
  };
  return (
    <div
      className="container mt-2 shadow-lg p-3 mb-5 bg-white rounded w-75 h-100"
      id="about"
    >
      <div className="row">
        <div className="col-sm">
          <div className="d-flex justify-content-center w-100">
            <Bootsrap.Col xs={8} md={7} sm={6}>
              <Image src={myPhoto} fluid roundedCircle />
            </Bootsrap.Col>
          </div>
          <Span skill="HTML5" progress={50} />
          <Span skill="CSS3" progress={25} />
          <Span skill="javascript" progress={50} />
          <Span skill="ReactJS" progress={75} />
          <Span skill="Bootsrap" progress={25} />
        </div>
        <div className="col-sm">
          <h2>About Me</h2>
          <hr className="hr1" />
          <p>
            Meticulous web developer with over 8 month of front end experience
            and passion for responsive website design and a firm believer in the
            mobile-first approach. bitcamp and freecodecamp certified.
            Implemented new responsive website approach which increased mobile
            traffic by 20%.
          </p>
          <p>
            I am computer science student in tbilisi state university seconde
            curse
          </p>
          <p>
            Motivated designer and developer with experience creating custom
            websites with ReactJs, JavaScript, HTML5, and CSS3.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import "./style.css";
import firstProject from "../../images/firstProject.jpg";
import recipeApp from "../../images/recipeApp.jpg";
import quizApp from "../../images/quiz-app.png";
import Image from "react-bootstrap/Image";
import * as Bootsrap from "react-bootstrap";

interface Works {
  href: string;
  photo: any;
  name: string;
}
const MyWork: React.FC = (): JSX.Element => {
  const Works = ({ href, photo, name }: Works): JSX.Element => {
    return (
      <div className="text-center" id="work">
        <div className="d-flex justify-content-center">
          <a href={href}>
            <Bootsrap.Col xs={10} md={12} className="work-photo">
              <Image src={photo} fluid />
            </Bootsrap.Col>
            <p>{name}</p>
          </a>
        </div>
        <p className="made-with">made with react</p>
      </div>
    );
  };

  return (
    <div>
      <div className="my-work-header">
        <h1> my works</h1>
        <p>Check out my lastest projects</p>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Works
              href="https://serene-leavitt-ee9476.netlify.app"
              photo={firstProject}
              name="Todo app"
            />
          </div>
          <div className="col-sm">
            <Works
              href="https://pedantic-mirzakhani-0d4030.netlify.app"
              photo={recipeApp}
              name="Recipe App"
            />
          </div>
          <div className="col-sm">
            <Works
              href="https://zen-mcclintock-9d836e.netlify.app"
              photo={quizApp}
              name="Quiz App"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyWork;

import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import AboutMe from "./components/About me/AboutMe";
import MyWork from "./components/work/myWork";
const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import AboutMe from "./components/About me/AboutMe";
const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
    </div>
  );
};

export default App;

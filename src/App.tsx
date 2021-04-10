import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import AboutMe from "./components/About me/AboutMe";
import MyWork from "./components/work/myWork";
import ContactMe from "./components/contact/contactMe";
const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </div>
  );
};

export default App;

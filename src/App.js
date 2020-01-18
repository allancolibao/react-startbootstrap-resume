import React from "react";
import "./App.css";
import Profile from "./assets/img/profile.JPG";
import NavBar from "./components/nav/NavBar";
import MainSections from "./components/sections/MainSection";

function App() {
  return (
    <React.Fragment>
      <div id="page-top" className="App">
        <NavBar profile={Profile} />
        <MainSections component={MainSections} />
      </div>
    </React.Fragment>
  );
}

export default App;

import "./Landing.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React from "react";
import Typewriter from "typewriter-effect";

function Landing() {
  function btnLogicOne() {
    console.log("loading pop-up screen of resume...");
  }
  function btnLogicTwo() {
    window.location.href = 'https://github.com/TSherpa10';
    console.log("navigating to github profile...");
  }
  function btnLogicThree() {
    window.location.href = 'https://www.linkedin.com/in/tsherpa10/';
    console.log("navigating to linkedin profile...");
  };
  return (
    <>
      <div className="main">
        <article className="main-block-1">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("TASHI SHERPA").start();
            }}
          />
          <p className="main-text">my portfolio.</p>
          <div className="main-buttons">
            <button id="btn-1" onClick={btnLogicOne}>
              Resume
            </button>
            <button id="btn-2" onClick={btnLogicTwo}>
              Github
            </button>
            <button id="btn-3" onClick={btnLogicThree}>
              Linkedin
            </button>
          </div>
            <h1 className="main-projects">projects</h1>
            <ArrowDownwardIcon
              className="arrowLogo"
              sx={{
                fontSize: 120,
              }}
            />
        </article>
        <article className="main-block-2"></article>
      </div>
    </>
  );
}

export default Landing;

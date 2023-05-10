import "./Landing.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React, {useRef} from "react";
import Typewriter from "typewriter-effect";

function Landing() {

  const block2Ref = useRef()

  function btnLogicOne() {
    console.log("loading pop-up screen of resume...");
  };
  function btnLogicTwo() {
    window.location.href = 'https://github.com/TSherpa10';
    console.log("navigating to github profile...");
  };
  function btnLogicThree() {
    window.location.href = 'https://www.linkedin.com/in/tsherpa10/';
    console.log("navigating to linkedin profile...");
  };
  function btnLogicFour() {
    block2Ref.current.scrollIntoView({ behavior: 'smooth'})
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
          <div className="projectsBtnDiv" onClick={btnLogicFour}>
            <button id="projects-btn">
              <ArrowDownwardIcon
                className="arrowLogo"
                sx={{
                  fontSize: 120,
                }}
              />
            </button>
          </div>
        </article>
        <article className="main-block-2" ref={block2Ref}>
          <hr className="dotted-line"/>
          <button id="btn2-1">FUTURE PROJECT</button>
          <button id="btn2-2">NERF-or-Nothing</button>
          <button id="btn2-3">Classtime!</button>
          <button id="btn2-4">UChat</button>
          <button id="btn2-5">Preplify</button>
        </article>
      </div>
    </>
  );
}

export default Landing;

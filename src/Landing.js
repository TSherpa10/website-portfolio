import "./Landing.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NearMeIcon from "@mui/icons-material/NearMe";
import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

function Landing() {
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);
  const block4Ref = useRef(null);
  //archive.txt insert here

  //Block1 + Arrow Button Logic
  function btnLogicOne() {
    window.location.href =
      "https://drive.google.com/file/d/1ZXzKajUR5uEOidErHxf34p-U5tOR3BXq/view?usp=sharing";
    console.log("loading pop-up screen of resume...");
  }
  function btnLogicTwo() {
    window.location.href = "https://github.com/TSherpa10";
    console.log("navigating to github profile...");
  }
  function btnLogicThree() {
    window.location.href = "https://www.linkedin.com/in/tsherpa10/";
    console.log("navigating to linkedin profile...");
  }
  function btnLogicFour() {
    block2Ref.current.scrollIntoView({ behavior: "smooth" });
  }
  function btnLogicFive() {
    block3Ref.current.scrollIntoView({ behavior: "smooth" });
  }
  function btnEmail() {
    window.location.href = "mailto:tashisherpa455@gmail.com";
    console.log("email prompt");
  }
  //Project Button Logic
  function btnProject1() {} //future project placeholder
  function btnProject2() {
    window.location.href = "https://github.com/NeRF-or-Nothing";
  }
  function btnProject3() {
    window.location.href = "https://github.com/ctplatform/classtime-web";
  }
  function btnProject4() {
    window.location.href = "https://github.com/TSherpa10/UChat";
  }
  function btnProject5() {
    window.location.href = "https://github.com/jchen2003/Preplify3.0";
  }
  return (
    <>
      <div className="main">
        <article
          className="main-block-1"
          ref={block1Ref}
        >
          <h1 className="main-title">TASHI SHERPA</h1>
          <Typewriter
            options={{
              deleteSpeed: 50,
              delay: 80,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .typeString("my portfolio.")
                .start()
                .pauseFor(3000)
                .deleteChars(11)
                .typeString(" personal website.")
                .pauseFor(3000)
                .deleteChars(18)
                .typeString(" creative page.")
                .pauseFor(3000)
                .deleteChars(15)
                .start();
            }}
          />
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
          <h1 className="main-abstract">about me</h1>
          <div className="abstractBtnDiv" onClick={btnLogicFour}>
            <button id="abstract-btn">
              <ArrowDownwardIcon
                className="arrowLogo"
                sx={{
                  fontSize: 120,
                }}
              />
            </button>
          </div>
          <div className="contact">
            <button className="contact-section" onClick={btnEmail}>
              <h1 className="contact-text">click to email me!</h1>
              <NearMeIcon className="email-icon" />
            </button>
          </div>
        </article>

        <article
          className="main-block-2"
          ref={block2Ref}
        >
          <div className="abstract">
            <h1 className="abstract-text">
              I am a rising junior studying computer science at
              <strong className="emp-text-2">RPI</strong>
            </h1>
            <h1 className="abstract-text">
              This summer, I was a software engineer intern at the
              <strong className="emp-text-3">NYTimes</strong> - Live News team
              <br />I worked to improve live news engagement for readers and
              publishing workflows for journalists
            </h1>
            <h1 className="abstract-text">
              Previously, I was a supervised ML research intern at my university
              working on large polycrystalline datasets
            </h1>
            <h1 className="abstract-text">
              Contributor to multiple open-source projects, incoming Codepath
              web development fellow, honors student, aspiring software engineer
              <br />
              Indoor boulderer, pixel art enthusiast, fan of the NBA (Lebron is
              my GOAT!)
            </h1>
            <h1 className="abstract-text">
              As a full-stack enthusiast, I strive to create meaningful
              applications that educate others
            </h1>
            <h1 className="abstract-text">
              I'm always available to chat [contact me on the bottom right :3]
            </h1>
          </div>

          <h1 className="main-projects">projects</h1>
          <div className="projectBtnDiv" onClick={btnLogicFive}>
            <button id="project-btn">
              <ArrowDownwardIcon
                className="arrowLogo2"
                sx={{
                  fontSize: 120,
                }}
              />
            </button>
          </div>
        </article>

        <article
          className="main-block-3"
          ref={block3Ref}
        >
          <hr className="dotted-line" />
          <button id="btn2-1">more coming soon!</button>
          <button id="btn2-2" onClick={btnProject2}>
            NERF-or-Nothing
          </button>
          <button id="btn2-3" onClick={btnProject3}>
            Classtime!
          </button>
          <button id="btn2-4" onClick={btnProject4}>
            UChat
          </button>
          <button id="btn2-5" onClick={btnProject5}>
            Preplify
          </button>

          <h1 className="footer">a self-made website, powered by React</h1>
        </article>
      </div>
    </>
  );
}

export default Landing;

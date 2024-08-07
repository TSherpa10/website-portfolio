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
      "https://github.com/TSherpa10/website-portfolio/blob/main/Tashi_Sherpa_Resume.pdf";
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
  function btnProject1() {
    window.location.href = "https://notoshi.itch.io/brave-summit";
  }
  function btnProject2() {
    window.location.href = "https://github.com/StrataLink/ScribeAI";
  }
  function btnProject3() {
    window.location.href = "https://github.com/NeRF-or-Nothing";
  }
  function btnProject4() {
    window.location.href = "https://github.com/TSherpa10/UChat";
  }
  function btnProject5() {
    window.location.href = "https://github.com/ctplatform/classtime-web";
  }
  return (
    <>
      <div className="main">
        <article className="main-block-1" ref={block1Ref}>
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

        <article className="main-block-2" ref={block2Ref}>
          <div className="abstract">
            <h1 className="abstract-text">Hello! :D</h1>
            <h1 className="abstract-text">
              I am<strong className="emp-text-1">Tashi Sherpa,</strong> a rising
              senior studying computer science at
              <strong className="emp-text-2">
                Rensselaer Polytechnic Institute
              </strong>
            </h1>
            <h1 className="abstract-text">
              This summer, I am a software developer coop at
              <strong className="emp-text-1">Leidos</strong> working on ocean
              acoustic simulation software
              <br />
              with a secret clearance. I use C++, Python, Golang, and Bash
              scripting!
            </h1>
            <h1 className="abstract-text">
              Last summer, I was a software engineer intern at the
              <strong className="emp-text-3">NYTimes</strong> - Live News team
              <br />
              working on live news engagement for readers and publishing
              workflows for journalists.
            </h1>
            <h1 className="abstract-text">
              Previously, I was a supervised machine learning research intern at
              my university working on large polycrystalline datasets.
            </h1>
            <h1 className="abstract-text">
              Contributor to multiple open-source projects, Codepath WEB102
              member, aspiring software engineer, indoor boulderer, pixel art
              enthusiast, NBA aficionado (go Knicks!), lifelong learner.
            </h1>
            <h1 className="abstract-text">
              currently working on:{" "}
              <a href="https://github.com/StrataLink">
                how to launch my startup
              </a>
              , game dev (check Brave Summit!), and mobile development with Swift!
            </h1>
            <h1 className="abstract-text">
              I'm always available to chat! [contact me on the bottom right :3]
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

        <article className="main-block-3" ref={block3Ref}>
          <h1 className="project-header">project list</h1>
          <button id="btn2-1" onClick={btnProject1}>
            Brave Summit
          </button>
          <button id="btn2-2" onClick={btnProject2}>
            ScribeAI
          </button>
          <button id="btn2-3" onClick={btnProject3}>
            NERF-or-Nothing
          </button>
          <button id="btn2-4" onClick={btnProject4}>
            UChat
          </button>
          <button id="btn2-5" onClick={btnProject5}>
            Classtime!
          </button>
          <h2 className="prefooter">
            more projects on my{" "}
            <a href="https://github.com/TSherpa10">github</a>
          </h2>
          <h3 className="footer">a self-made website, powered by React</h3>
        </article>
      </div>
    </>
  );
}

export default Landing;

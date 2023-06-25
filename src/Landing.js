import "./Landing.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
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
    console.log("loading pop-up screen of resume...");
    block3Ref.current.scrollIntoView({ behavior: "smooth" });
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
  //Project Button Logic
  function btnProject1() {}
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
          //style={{ overflowY: "scroll" }}
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

        <article
          className="main-block-2"
          ref={block2Ref}
          //style={{ overflowY: "scroll" }}
        >
          <hr className="dotted-line" />
          <button id="btn2-1">Coming Soon?!?</button>
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
          <h1 className="main-resume">resume</h1>
          <div className="resumeBtnDiv" onClick={btnLogicFive}>
            <button id="resume-btn">
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
          //style={{ overflowY: "scroll" }}
        >
          <div className="resume-about">
            <h1 className="resume-title-about">About</h1>
            <p className="resume-desc-about">
              <strong className="resume-desc-emp-about">Tashi Sherpa</strong> is
              a rising junior at Rensselaer Polytechnic Institute with
              experience in full-stack web development, object-oriented
              programming, and machine learning. He is a team player who has
              contributed and led multiple projects, a problem-solving
              enthusiast who loves algorithms and discrete math, and a student
              who loves to explore new technologies, such as mobile development
              and 3d computing. He is looking for a software related internship
              for the Summer 2024 term.
            </p>
          </div>
          <div className="resume-edu">
            <h1 className="resume-title-edu">Education</h1>
            <h2 className="resume-subhead1-edu">
              Rensselaer Polytechnic Institute (Aug. 2021 - May 2025)
            </h2>
            <p className="resume-desc-edu">
              <em className="resume-desc-honors-edu">
                3.96 / 4.00 GPA, Dean's List all semesters, 2023 ICPC NE
                Regionals
              </em>
              <strong className="resume-desc-course-edu">Affiliations:</strong>
              Rensselaer Center for Open Source (RCOS), Society of Asian
              Scientists and Engineers (SASE), Upsilon Pi Epsilon (UPE)
              <br />
              <strong className="resume-desc-course-edu">
                Coursework:
              </strong>{" "}
              Algorithms (Spring 2023), Principles of Software (Spring 2023),
              Linear Algebra (Spring 2023), Computer Architecture (Fall 2022),
              Discrete Math (Fall 2022), Multivariable Calculus (Fall 2022),
              Data Structures (Spring 2022), Calculus II (Spring 2022), Intro to
              Computer Science (Fall 2021), Calculus I (Fall 2021)
            </p>
            <h2 className="resume-subhead2-edu">
              Stuyvesant High School (Sep. 2017 - June 2021)
            </h2>
          </div>
          <div className="resume-exp">
            <h1 className="resume-title-exp">Work Experience</h1>
            <h2 className="resume-subhead1-exp">
              Software Engineer Intern @ The New York Times (June 2023 - Aug.
              2023)
            </h2>
            <p className="resume-desc1-exp">
              I am working on the Storytelling - Live team as a fullstack
              engineer. I am working on both the main site and the newsroom CMS
              (content management system), fixing UI/UX bugs to aid both
              journalists and news readers. At my internship, I am an active
              participant of the AGILE methodology, attending live sprints,
              daily standups, live grooming, and retrospective scrum meetings.
            </p>
            <h2 className="resume-subhead2-exp">
              Machine Learning Research Assistant @ Rensselaer Polytechnic
              Institute (Jan. 2023 - May 2023)
            </h2>
            <p className="resume-desc2-exp">
              I was responsible with feature calculation, machine modeling, and
              model analyzation for a microcrystalline material dataset. I used
              MATLAB to calculate the 21 features and Python (with libraries
              such as scikit-learn, pandas, matplotlib, NumPy) to fit and
              analyze the data using various types of models and strategies.
            </p>
          </div>
          <div
            className="resume-skill"
            ref={block4Ref}
            //style={{overflowY: "scroll"}}
          >
            <h1 className="resume-title-skill">Skills</h1>
            <h2 className="resume-subhead-skill">Languages:</h2>
            <p className="resume-desc-skill">
              Python, C/C++, Java, HTML/CSS, Javascript/Typescript, GraphQL,
              MATLAB, MIPS, Verilog, R
            </p>
            <br />
            <h2 className="resume-subhead-skill">Frameworks:</h2>
            <p className="resume-desc-skill">
              React.js, Next.js, Flask, SASS, Bootstrap 5
            </p>
            <br />
            <h2 className="resume-subhead-skill">Developer Tools:</h2>
            <p className="resume-desc-skill">
              Git, Github, Netlify, Jira, Figma, MacOS, Linux, VSCode, Eclipse
            </p>
            <br />
            <h2 className="resume-subhead-skill">Libraries:</h2>
            <p className="resume-desc-skill">
              scikit-learn, NumPy, pandas, matplotlib
            </p>
          </div>
          <h3 className="contact-title">Contact Info</h3>
          <div className="contact">
            <section className="contact-subhead">
              <div className="iconDiv">
                <PhoneIcon sx={{ fontSize: 40 }} className="icon-phone" />
              </div>
              <h3 className="contact-desc1">+1 (917)-402-0272</h3>
            </section>
            <br />
            <section className="contact-subhead">
              <div className="iconDiv">
                <a id="email-btn" href="mailto: tashisherpa455@gmail.com">
                  <EmailIcon sx={{ fontSize: 40 }} className="icon-email" />
                </a>
              </div>
              <h3 className="contact-desc2">tashisherpa455@gmail.com</h3>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}

export default Landing;

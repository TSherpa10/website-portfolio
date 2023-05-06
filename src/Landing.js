import "./Landing.css";

function Landing() {
  function btnLogicOne() {
    console.log("placeholder-1");
  }
  function btnLogicTwo() {
    console.log("placeholder-2");
  }
  function btnLogicThree() {
    console.log("placeholder-3");
  }
  return (
    <>
      <div className="main">
        <article className="main-block-1">
          <h1 id="main-header">TASHI SHERPA</h1>
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
        </article>
        <article className="main-block-2"></article>
      </div>
    </>
  );
}

export default Landing;

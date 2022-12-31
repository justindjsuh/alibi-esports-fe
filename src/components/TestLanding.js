import { Link } from 'react-router-dom';
const TestLanding = () => {
  return (
    <div className="landing_container">
      <div className="hero-container">
        <div className="environment"></div>
        <h2 className="hero glitch layers" data-text="ALIBI ESPORTS">
          <span>
            <span className="alibi">ALIBI</span> ESPORTS
          </span>
        </h2>
      </div>
      <div className="landing_btns">
        <a href="#section1_top">WHO WE ARE</a>
        <Link to="/tournaments" className="shrink-border">
          Tournaments
        </Link>
      </div>
    </div>
  );
};

export default TestLanding;

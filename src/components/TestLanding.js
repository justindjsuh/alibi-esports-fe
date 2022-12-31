import { Link } from 'react-router-dom';
const TestLanding = () => {
  return (
    <div className="landing_container">
      <div class="hero-container">
        <div class="environment"></div>
        <h2 class="hero glitch layers" data-text="ALIBI ESPORTS">
          <span>ALIBI ESPORTS</span>
        </h2>
      </div>
      <div className="landing_btns">
        <a href="#section1_top">WHO WE ARE</a>
        <Link to="/tournaments">Tournaments</Link>
      </div>
    </div>
  );
};

export default TestLanding;

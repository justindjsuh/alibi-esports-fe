import Aos from 'aos';
import 'aos/dist/aos.css';
import Letterize from 'letterizejs';
import { useEffect, useState } from 'react';
import SectionOne from './publicContent/SectionOne';
import SectionTwo from './publicContent/SectionTwo';
import SectionThree from './publicContent/SectionThree';

const Public = () => {
  const [letters, setLetters] = useState('ALIBI ESPORTS');

  useEffect(() => {
    Aos.init();
    setLetters(
      new Letterize({
        targets: '#company_name',
      })
    );
  }, []);

  return (
    <div className="public_container">
      <div className="public_main">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="public_main_content"
        >
          <div id="company_name">ALIBIESPORTS</div>
          <div className="public_main_btns">
            <a href="#team">MEET THE TEAM</a>
            {/* change this to contact href */}
            <a href="#team">CONTACT US</a>
          </div>
          <div className="public_quote_container">
            <div className="founder_quote">
              <div className="quote_img">
                <img src="../img/Logo.png" alt="logo" />
              </div>
              <div className="founder_quote_content">
                <p>
                  "Here at Alibi Esports we strive to reach communities where
                  competitive scenes may not exist. This way we can provide an
                  opportunity for competitive growth and a community to a wide
                  range of players."
                </p>
                <p>- Ryan Won (Founder)</p>
              </div>
            </div>
          </div>
          <svg
            className="arrows"
            onClick={() =>
              document.getElementById('section1_top').scrollIntoView()
            }
          >
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      </div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
};

export default Public;

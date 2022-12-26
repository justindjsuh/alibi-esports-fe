/*
 * Section 1
 * Contains the About portion and the Meet the Team portion
 */

const SectionOne = () => {
  return (
    <div className="public_section_1" id="section1_top">
      <div className="section1_info">
        <div className="who_we_are">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="section1_title"
          >
            <p>WHO WE ARE</p>
          </div>

          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="section1_desc"
          >
            <hr />
            <p>
              We are a group of recently graduated university students who met
              through a shared passion for gaming. The one thing we found, was
              that there was a lack of a competitive outlet for us and our
              friends. We love the gaming community and share their love for
              games AND their competitive spirit. <br></br>
              <br></br>So, we decided to take that passion and utilize it in a
              way that would benefit gamers in our community! We founded Alibi
              Esports as a competitive outlet for anyone who has a passion for
              gaming. We started off with running tournaments for close friends,
              but we now run tournaments for a variety of audiences no matter
              the skill gap!
            </p>
          </div>
        </div>

        <div className="mission_statement">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="section1_title"
          >
            <p>OUR MISSION</p>
          </div>

          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="section1_desc"
          >
            <hr />
            <p>
              We want to make e-sports more accessible to those getting their
              feet wet with their competitive journey, and to provide an
              opportunity of competitive growth to those who already have a
              career built out. We strive to build gaming communities and host
              tournaments where anyone who has a passion for gaming can connect
              and showcase their skills.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="section1_img"
      >
        <img
          src="../img/stand_out.png"
          alt="one individual stands out among the others"
        />
      </div>
    </div>
  );
};

export default SectionOne;

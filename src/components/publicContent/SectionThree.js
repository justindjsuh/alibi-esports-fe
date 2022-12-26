import { useInView } from 'react-intersection-observer';

const SectionThree = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="public_section_3">
      <div className="section3_title">
        <p>
          NAVIGATING THE <span style={{ color: '#27afc7' }}>ESPORTS</span>{' '}
          LANDSCAPE
        </p>
      </div>
      <hr />
      <div className="section3_desc">
        <p>
          As gaming becomes more popular the people and its community have grown
          larger. Although Esports have become more common, tournaments and
          events are still directed to those professionally. We help bring these
          opportunities to anyone who is interested by creating events tailored
          to their wants and needs.
        </p>
      </div>
      <div className="section3_timeline">
        <div className="section3_title">
          <p>WHAT WE DO</p>
          <hr />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          ref={ref}
          className={`timeline_section ${
            inView ? 'timeline_section_animation' : ''
          }`}
        >
          <p className="timeline_title">STEP 1</p>
          <p className="timeline_desc">
            Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super
            chub very good spot, the neighborhood pupper lotsa pats. Borkdrive
            shibe shoober what a nice floof, borking doggo.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-duration="500"
          ref={ref}
          className={`timeline_section ${
            inView ? 'timeline_section_animation' : ''
          }`}
        >
          <p className="timeline_title">STEP 2</p>
          <p className="timeline_desc">
            Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super
            chub very good spot, the neighborhood pupper lotsa pats. Borkdrive
            shibe shoober what a nice floof, borking doggo.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="1000"
          data-aos-duration="500"
          ref={ref}
          className={`timeline_section ${
            inView ? 'timeline_section_animation' : ''
          }`}
        >
          <p className="timeline_title">STEP 3</p>
          <p className="timeline_desc">
            Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super
            chub very good spot, the neighborhood pupper lotsa pats. Borkdrive
            shibe shoober what a nice floof, borking doggo.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="1500"
          data-aos-duration="500"
          ref={ref}
          className={`timeline_section ${
            inView ? 'timeline_section_animation' : ''
          }`}
        >
          <p className="timeline_title">STEP 4</p>
          <p className="timeline_desc">
            Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super
            chub very good spot, the neighborhood pupper lotsa pats. Borkdrive
            shibe shoober what a nice floof, borking doggo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;

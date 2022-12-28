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
            We find opportunities in communities either by reaching out to
            potential target audiences like schools or clubs and send them some
            kind of inquiry to gauge how interested they are.
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
            We talk to members of the community and we try to get a better idea
            of what they are looking for in a competitive environment. This
            helps us gauge what kind of tournament to organize for them.
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
            We sit down with the team and start planning tournament details,
            potential outlets to advertise, and how to gain interest. This can
            be done through social media or other organizations if they are
            willing to assist.
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
            Finally, with production, design, and interest out of the way, we
            can open up the tournament and have players from the community
            compete with one another!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;

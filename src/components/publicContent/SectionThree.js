import TimelineObserver from 'react-timeline-animation';
import Timeline from '../Timeline';

const SectionThree = () => {
  // Empty function for now, may add functionality in the future
  const onCallback = () => {
    return;
  };

  return (
    <div className="public_section_3">
      <div className="section3_title">
        <p>NAVIGATING THE ESPORTS LANDSCAPE</p>
      </div>
      <div className="section3_desc">
        <hr />
        <p>
          As gaming becomes more popular the people and its community have grown
          larger. Although Esports have become more common, tournaments and
          events are still directed to those professionally. We help bring these
          opportunities to anyone who is interested by creating events tailored
          to their wants and needs. <br></br>
          <br></br> Here is a quick look at what we do!
        </p>
      </div>
      <div>
        <TimelineObserver
          initialColor="#e5e5e5"
          fillColor="#27afc7"
          handleObserve={(setObserver) => (
            <Timeline
              callback={onCallback}
              className="timeline"
              setObserver={setObserver}
            />
          )}
        />
      </div>
    </div>
  );
};

export default SectionThree;

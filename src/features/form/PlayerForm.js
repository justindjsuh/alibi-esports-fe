import { useRef, useEffect, useState } from 'react';

const PlayerForm = () => {
  const [captainFName, setCaptainFName] = useState('');
  const [captainLName, setCaptainLName] = useState('');
  const [captainInGameName, setCaptainInGameName] = useState('');
  const [captainRank, setCaptainRank] = useState('');
  const [captainDiscord, setCaptainDiscord] = useState('');
  const [teamName, setTeamName] = useState('');

  const [p2FName, setP2FName] = useState('');
  const [p2LName, setP2LName] = useState('');
  const [p2InGameName, setP2InGameName] = useState('');
  const [p2Rank, setP2Rank] = useState('');

  const [p3FName, setP3FName] = useState('');
  const [p3LName, setP3LName] = useState('');
  const [p3InGameName, setP3InGameName] = useState('');
  const [p3Rank, setP3Rank] = useState('');

  const [p4FName, setP4FName] = useState('');
  const [p4LName, setP4LName] = useState('');
  const [p4InGameName, setP4InGameName] = useState('');
  const [p4Rank, setP4Rank] = useState('');

  const [p5FName, setP5FName] = useState('');
  const [p5LName, setP5LName] = useState('');
  const [p5InGameName, setP5InGameName] = useState('');
  const [p5Rank, setP5Rank] = useState('');

  //   for adding the completed class to change border color
  const [capCompletion, setCapCompletion] = useState(false);
  const [p2Completion, setP2Completion] = useState(false);
  const [p3Completion, setP3Completion] = useState(false);
  const [p4Completion, setP4Completion] = useState(false);
  const [p5Completion, setP5Completion] = useState(false);

  const [formCompletion, setFormCompletion] = useState(false);

  // for giving a confirmation of submission screen
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef([]);

  const handleCaptainSectionSave = (e) => {
    e.preventDefault();
    if (
      captainFName &&
      captainLName &&
      captainInGameName &&
      captainRank &&
      captainDiscord &&
      teamName
    ) {
      setCapCompletion(true);
    } else {
      setCapCompletion(false);
      if (!captainFName) {
        setCaptainFName(null);
      }
      if (!captainLName) {
        setCaptainLName(null);
      }
      if (!captainInGameName) {
        setCaptainInGameName(null);
      }
      if (!captainRank) {
        setCaptainRank(null);
      }
      if (!captainDiscord) {
        setCaptainDiscord(null);
      }
      if (!teamName) {
        setTeamName(null);
      }
    }
  };

  const handleSubmit = (e) => {
    console.log(
      'cap:\n',
      capCompletion,
      '\np2:\n',
      p2Completion,
      '\np3:\n',
      p3Completion,
      '\np4:\n',
      p4Completion,
      '\np5:\n',
      p5Completion
    );
    e.preventDefault();
    console.log(e);
  };

  useEffect(() => {
    if (p2FName && p2LName && p2InGameName && p2Rank) {
      setP2Completion(true);
    }

    if (p3FName && p3LName && p3InGameName && p3Rank) {
      setP3Completion(true);
    }

    if (p4FName && p4LName && p4InGameName && p4Rank) {
      setP4Completion(true);
    }

    if (p5FName && p5LName && p5InGameName && p5Rank) {
      setP5Completion(true);
    }

    if (
      capCompletion &&
      p2Completion &&
      p3Completion &&
      p4Completion &&
      p5Completion
    ) {
      setFormCompletion(true);
    }

    const handleClick = (event) => {
      event.target.classList.toggle('active');
      const content = event.target.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    };

    const element = ref.current;
    if (element) {
      element.forEach((el) => el.addEventListener('click', handleClick));
    }

    return () => {
      if (element[0]) {
        element.forEach((el) => el.removeEventListener('click', handleClick));
      } else return;
    };
  });

  return (
    <>
      <div className="form_content_container form_content_captain">
        <button
          ref={(el) => (ref.current[0] = el)}
          className={`form_content_title ${
            capCompletion ? 'complete active' : ''
          }`}
        >
          Captain
        </button>
        <div className="form_content_collapsible">
          <form className="captain_form" onSubmit={handleCaptainSectionSave}>
            <div className="form_content">
              <div className="input_area">
                <label htmlFor="fname">First Name</label>
                <input
                  className={`${captainFName === null ? 'input_error' : ''}`}
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  onChange={(e) => setCaptainFName(e.target.value)}
                />
              </div>
              <div className="input_area">
                <label htmlFor="lname">Last Name</label>
                <input
                  className={`${captainLName === null ? 'input_error' : ''}`}
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  onChange={(e) => setCaptainLName(e.target.value)}
                />
              </div>
              <div className="input_area">
                <label htmlFor="ign">IGN</label>
                <input
                  className={`${
                    captainInGameName === null ? 'input_error' : ''
                  }`}
                  type="text"
                  placeholder="IGN"
                  name="ign"
                  onChange={(e) => setCaptainInGameName(e.target.value)}
                />
              </div>
              <div className="input_area">
                <label htmlFor="rank">Rank</label>
                <input
                  className={`${captainRank === null ? 'input_error' : ''}`}
                  type="text"
                  placeholder="Rank"
                  name="rank"
                  onChange={(e) => setCaptainRank(e.target.value)}
                />
              </div>
              <div className="input_area">
                <label htmlFor="discord">Discord</label>
                <input
                  className={`${captainDiscord === null ? 'input_error' : ''}`}
                  type="text"
                  placeholder="Discord (username#0000)"
                  name="discord"
                  onChange={(e) => setCaptainDiscord(e.target.value)}
                />
              </div>{' '}
              <div className="input_area">
                <label htmlFor="teamName">Team Name</label>
                <input
                  className={`${teamName === null ? 'input_error' : ''}`}
                  type="text"
                  placeholder="Team Name"
                  name="teamName"
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
            </div>
            <button className="section_save_btn">SAVE</button>
          </form>
        </div>
      </div>
      {/* PLAYER 2 */}
      <div className="form_content_container form_content_player2">
        <button
          ref={(el) => (ref.current[1] = el)}
          className={`form_content_title `}
        >
          Player 2
        </button>
        <div className="form_content_collapsible">
          <div className="form_content">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={(e) => setP2FName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => setP2LName(e.target.value)}
            />
            <input
              type="text"
              placeholder="IGN"
              name="ign"
              onChange={(e) => setP2InGameName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Rank"
              name="rank"
              onChange={(e) => setP2Rank(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* PLAYER 3 */}
      <div className="form_content_container form_content_player3">
        <button
          ref={(el) => (ref.current[2] = el)}
          className={`form_content_title `}
        >
          Player 3
        </button>
        <div className="form_content_collapsible">
          <div className="form_content">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={(e) => setP3FName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => setP3LName(e.target.value)}
            />
            <input
              type="text"
              placeholder="IGN"
              name="ign"
              onChange={(e) => setP3InGameName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Rank"
              name="rank"
              onChange={(e) => setP3Rank(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* PLAYER 4 */}
      <div className="form_content_container form_content_player4">
        <button
          ref={(el) => (ref.current[3] = el)}
          className={`form_content_title `}
        >
          Player 4
        </button>
        <div className="form_content_collapsible">
          <div className="form_content">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={(e) => setP4FName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => setP4LName(e.target.value)}
            />
            <input
              type="text"
              placeholder="IGN"
              name="ign"
              onChange={(e) => setP4InGameName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Rank"
              name="rank"
              onChange={(e) => setP4Rank(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* PLAYER 5 */}
      <div className="form_content_container form_content_player5">
        <button
          ref={(el) => (ref.current[4] = el)}
          className={`form_content_title `}
        >
          Player 5
        </button>
        <div className="form_content_collapsible">
          <div className="form_content">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={(e) => setP5FName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => setP5LName(e.target.value)}
            />
            <input
              type="text"
              placeholder="IGN"
              name="ign"
              onChange={(e) => setP5InGameName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Rank"
              name="rank"
              onChange={(e) => setP5Rank(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="checkbox_container">
        <label>
          I have read this waiver form in its entirety, and I voluntarily accept
          the terms of the waiver by marking this checkbox, and warrant that I
          fully understand its contents.
          <input type="checkbox" name="waiver" required></input>
          <span className="checkmark"></span>
        </label>
      </div>
      {/* BUTTONS */}
      <button
        type="submit"
        className={`${formCompletion ? 'submit_btn' : 'submit_btn_disabled'}`}
        disabled={formCompletion ? false : true}
      >
        SUBMIT
      </button>
    </>
  );
};

export default PlayerForm;

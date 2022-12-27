import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createTeam,
  addCaptain,
  addPlayer2,
  addPlayer3,
  addPlayer4,
  addPlayer5,
} from './formSlice';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      if (!captainFName) setCaptainFName(null);
      if (!captainLName) setCaptainLName(null);
      if (!captainInGameName) setCaptainInGameName(null);
      if (!captainRank) setCaptainRank(null);
      if (!captainDiscord) setCaptainDiscord(null);
      if (!teamName) setTeamName(null);
    }
  };

  const handlePlayer2SectionSave = (e) => {
    e.preventDefault();
    if (p2FName && p2LName && p2InGameName && p2Rank) {
      setP2Completion(true);
    } else {
      setP2Completion(false);
      if (!p2FName) setP2FName(null);
      if (!p2LName) setP2LName(null);
      if (!p2InGameName) setP2InGameName(null);
      if (!p2Rank) setP2Rank(null);
    }
  };

  const handlePlayer3SectionSave = (e) => {
    e.preventDefault();
    if (p3FName && p3LName && p3InGameName && p3Rank) {
      setP3Completion(true);
    } else {
      setP3Completion(false);
      if (!p3FName) setP3FName(null);
      if (!p3LName) setP3LName(null);
      if (!p3InGameName) setP3InGameName(null);
      if (!p3Rank) setP3Rank(null);
    }
  };

  const handlePlayer4SectionSave = (e) => {
    e.preventDefault();
    if (p4FName && p4LName && p4InGameName && p4Rank) {
      setP4Completion(true);
    } else {
      setP4Completion(false);
      if (!p4FName) setP4FName(null);
      if (!p4LName) setP4LName(null);
      if (!p4InGameName) setP4InGameName(null);
      if (!p4Rank) setP4Rank(null);
    }
  };

  const handlePlayer5SectionSave = (e) => {
    e.preventDefault();
    if (p5FName && p5LName && p5InGameName && p5Rank) {
      setP5Completion(true);
    } else {
      setP5Completion(false);
      if (!p5FName) setP5FName(null);
      if (!p5LName) setP5LName(null);
      if (!p5InGameName) setP5InGameName(null);
      if (!p5Rank) setP5Rank(null);
    }
  };

  const handleCheck = () => {
    if (
      capCompletion &&
      p2Completion &&
      p3Completion &&
      p4Completion &&
      p5Completion
    ) {
      setFormCompletion(true);
    } else setFormCompletion(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTeam({ teamName }));
    dispatch(
      addCaptain({
        captainFName,
        captainLName,
        captainInGameName,
        captainRank,
        captainDiscord,
        teamName,
      })
    );
    dispatch(addPlayer2({ p2FName, p2LName, p2InGameName, p2Rank, teamName }));
    dispatch(addPlayer3({ p3FName, p3LName, p3InGameName, p3Rank, teamName }));
    dispatch(addPlayer4({ p4FName, p4LName, p4InGameName, p4Rank, teamName }));
    dispatch(addPlayer5({ p5FName, p5LName, p5InGameName, p5Rank, teamName }));
    setIsSubmitted(true);
  };

  useEffect(() => {
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
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
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
                className={`${captainInGameName === null ? 'input_error' : ''}`}
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
          <button
            className="section_save_btn"
            onClick={handleCaptainSectionSave}
          >
            SAVE
          </button>
        </div>
      </div>
      {/* PLAYER 2 */}
      <div className="form_content_container form_content_player2">
        <button
          ref={(el) => (ref.current[1] = el)}
          className={`form_content_title ${
            p2Completion ? 'complete active' : ''
          }`}
        >
          Player 2
        </button>
        <div className="form_content_collapsible">
          <div className="form_content">
            <div className="input_area">
              <label htmlFor="fname">First Name</label>
              <input
                className={`${p2FName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="First Name"
                name="fname"
                onChange={(e) => setP2FName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="lname">Last Name</label>
              <input
                className={`${p2LName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="Last Name"
                name="lname"
                onChange={(e) => setP2LName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="ign">IGN</label>
              <input
                className={`${p2InGameName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="IGN"
                name="ign"
                onChange={(e) => setP2InGameName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="rank">Rank</label>
              <input
                className={`${p2Rank === null ? 'input_error' : ''}`}
                type="text"
                placeholder="Rank"
                name="rank"
                onChange={(e) => setP2Rank(e.target.value)}
              />
            </div>
          </div>
          <button
            className="section_save_btn"
            onClick={handlePlayer2SectionSave}
          >
            SAVE
          </button>
        </div>
      </div>
      {/* PLAYER 3 */}
      <div className="form_content_container form_content_player3">
        <button
          ref={(el) => (ref.current[2] = el)}
          className={`form_content_title ${
            p3Completion ? 'complete active' : ''
          }`}
        >
          Player 3
        </button>
        <div className="form_content_collapsible">
          <div className="form_content">
            <div className="input_area">
              <label htmlFor="fname">First Name</label>
              <input
                className={`${p3FName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="First Name"
                name="fname"
                onChange={(e) => setP3FName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="lname">Last Name</label>
              <input
                className={`${p3LName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="Last Name"
                name="lname"
                onChange={(e) => setP3LName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="ign">IGN</label>
              <input
                className={`${p3InGameName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="IGN"
                name="ign"
                onChange={(e) => setP3InGameName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="rank">Rank</label>
              <input
                className={`${p3Rank === null ? 'input_error' : ''}`}
                type="text"
                placeholder="Rank"
                name="rank"
                onChange={(e) => setP3Rank(e.target.value)}
              />
            </div>
          </div>
          <button
            className="section_save_btn"
            onClick={handlePlayer3SectionSave}
          >
            SAVE
          </button>
        </div>
      </div>
      {/* PLAYER 4 */}
      <div className="form_content_container form_content_player4">
        <button
          ref={(el) => (ref.current[3] = el)}
          className={`form_content_title ${
            p4Completion ? 'complete active' : ''
          }`}
        >
          Player 4
        </button>
        <div className="form_content_collapsible">
          <div className="form_content">
            <div className="input_area">
              <label htmlFor="fname">First Name</label>
              <input
                className={`${p4FName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="First Name"
                name="fname"
                onChange={(e) => setP4FName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="lname">Last Name</label>
              <input
                className={`${p4LName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="Last Name"
                name="lname"
                onChange={(e) => setP4LName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="ign">IGN</label>
              <input
                className={`${p4InGameName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="IGN"
                name="ign"
                onChange={(e) => setP4InGameName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="rank">Rank</label>
              <input
                className={`${p4Rank === null ? 'input_error' : ''}`}
                type="text"
                placeholder="Rank"
                name="rank"
                onChange={(e) => setP4Rank(e.target.value)}
              />
            </div>
          </div>
          <button
            className="section_save_btn"
            onClick={handlePlayer4SectionSave}
          >
            SAVE
          </button>
        </div>
      </div>
      {/* PLAYER 5 */}
      <div className="form_content_container form_content_player5">
        <button
          ref={(el) => (ref.current[4] = el)}
          className={`form_content_title ${
            p5Completion ? 'complete active' : ''
          }`}
        >
          Player 5
        </button>
        <div className="form_content_collapsible">
          <div className="form_content">
            <div className="input_area">
              <label htmlFor="fname">First Name</label>
              <input
                className={`${p5FName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="First Name"
                name="fname"
                onChange={(e) => setP5FName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="lname">Last Name</label>
              <input
                className={`${p5LName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="Last Name"
                name="lname"
                onChange={(e) => setP5LName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="ign">IGN</label>
              <input
                className={`${p5InGameName === null ? 'input_error' : ''}`}
                type="text"
                placeholder="IGN"
                name="ign"
                onChange={(e) => setP5InGameName(e.target.value)}
              />
            </div>
            <div className="input_area">
              <label htmlFor="rank">Rank</label>
              <input
                className={`${p5Rank === null ? 'input_error' : ''}`}
                type="text"
                placeholder="Rank"
                name="rank"
                onChange={(e) => setP5Rank(e.target.value)}
              />
            </div>
          </div>
          <button
            className="section_save_btn"
            onClick={handlePlayer5SectionSave}
          >
            SAVE
          </button>
        </div>
      </div>
      <p>
        Please send this waiver to your team and review it in its entirety so
        you may accept the terms on behalf of yourself and your four other team
        members as well.
      </p>
      <a href="" target="_blank" rel="noopener noreferrer">
        WAIVER FORM
      </a>
      <div className="checkbox_container">
        <label onChange={handleCheck}>
          I hereby represent that I am eighteen (18) years of age or older and I
          am competent to contract in my own name. You represent that you are at
          least 18 years of age, and if you live in another state or country,
          you are of the age necessary to enter into contracts according to the
          laws of your home state or country.I have read the waiver form above
          in its entirety, and I voluntarily accept the terms of the waiver by
          marking this checkbox, and warrant that I fully understand its
          contents.
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
    </form>
  );
};

export default PlayerForm;

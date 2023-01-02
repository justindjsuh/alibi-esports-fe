import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/Modal';
import ModalError from '../modal/ModalError';
import {
  createTeam,
  addCaptain,
  addPlayer2,
  addPlayer3,
  addPlayer4,
  addPlayer5,
  selectPlayers,
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

  const [sub1IGN, setSub1IGN] = useState(null);
  const [sub2IGN, setSub2IGN] = useState(null);

  const [coachIGN, setCoachIGN] = useState(null);
  const [coachDiscord, setCoachDiscord] = useState(null);

  const [managerDiscord, setManagerDiscord] = useState(null);

  //   for adding the completed class to change border color
  const [capCompletion, setCapCompletion] = useState(false);
  const [p2Completion, setP2Completion] = useState(false);
  const [p3Completion, setP3Completion] = useState(false);
  const [p4Completion, setP4Completion] = useState(false);
  const [p5Completion, setP5Completion] = useState(false);

  const [check1Completion, setCheck1Completion] = useState(false);
  const [check2Completion, setCheck2Completion] = useState(false);
  const [check3Completion, setCheck3Completion] = useState(false);
  const [check4Completion, setCheck4Completion] = useState(false);

  const [formCompletion, setFormCompletion] = useState(false);

  const [submitDisabled, setSubmitDisabled] = useState(true);

  // for giving a confirmation of submission screen
  const [isSubmitted, setIsSubmitted] = useState(false);

  const state = useSelector(selectPlayers);

  const ref = useRef([]);
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
    const collapsibleContainer = e.target.parentElement;
    if (collapsibleContainer.style.maxHeight) {
      collapsibleContainer.style.maxHeight = null;
    }
    const nextCollapsible = document.getElementsByClassName(
      'form_content_player2'
    )[0];
    nextCollapsible.childNodes[1].style.maxHeight =
      nextCollapsible.childNodes[1].scrollHeight + 'px';
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
    const collapsibleContainer = e.target.parentElement;
    if (collapsibleContainer.style.maxHeight) {
      collapsibleContainer.style.maxHeight = null;
    }
    const nextCollapsible = document.getElementsByClassName(
      'form_content_player3'
    )[0];
    nextCollapsible.childNodes[1].style.maxHeight =
      nextCollapsible.childNodes[1].scrollHeight + 'px';
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
    const collapsibleContainer = e.target.parentElement;
    if (collapsibleContainer.style.maxHeight) {
      collapsibleContainer.style.maxHeight = null;
    }
    const nextCollapsible = document.getElementsByClassName(
      'form_content_player4'
    )[0];
    nextCollapsible.childNodes[1].style.maxHeight =
      nextCollapsible.childNodes[1].scrollHeight + 'px';
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
    const collapsibleContainer = e.target.parentElement;
    if (collapsibleContainer.style.maxHeight) {
      collapsibleContainer.style.maxHeight = null;
    }
    const nextCollapsible = document.getElementsByClassName(
      'form_content_player5'
    )[0];
    nextCollapsible.childNodes[1].style.maxHeight =
      nextCollapsible.childNodes[1].scrollHeight + 'px';
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
    const collapsibleContainer = e.target.parentElement;
    if (collapsibleContainer.style.maxHeight) {
      collapsibleContainer.style.maxHeight = null;
    }
    const nextCollapsible = document.getElementsByClassName(
      'form_content_optionals'
    )[0];
    nextCollapsible.childNodes[1].style.maxHeight =
      nextCollapsible.childNodes[1].scrollHeight + 'px';
  };

  const handleOptionalsSection = (e) => {
    e.preventDefault();
    const collapsibleContainer = e.target.parentElement;
    if (collapsibleContainer.style.maxHeight) {
      collapsibleContainer.style.maxHeight = null;
    }
  };

  const handleCheck = () => {
    setCheck1Completion(!check1Completion);
    if (
      capCompletion &&
      p2Completion &&
      p3Completion &&
      p4Completion &&
      p5Completion
      // check1Completion &&
      // check2Completion &&
      // check3Completion &&
      // check4Completion
    ) {
      setFormCompletion(true);
    } else setFormCompletion(false);
  };
  // const handleCheck2 = () => {
  //   setCheck2Completion(!check2Completion);
  //   if (
  //     capCompletion &&
  //     p2Completion &&
  //     p3Completion &&
  //     p4Completion &&
  //     p5Completion &&
  //     check1Completion &&
  //     check2Completion &&
  //     check3Completion &&
  //     check4Completion
  //   ) {
  //     setFormCompletion(true);
  //   } else setFormCompletion(false);
  // };
  // const handleCheck3 = () => {
  //   setCheck3Completion(!check3Completion);
  //   if (
  //     capCompletion &&
  //     p2Completion &&
  //     p3Completion &&
  //     p4Completion &&
  //     p5Completion &&
  //     check1Completion &&
  //     check2Completion &&
  //     check3Completion &&
  //     check4Completion
  //   ) {
  //     setFormCompletion(true);
  //   } else setFormCompletion(false);
  // };
  // const handleCheck4 = () => {
  //   setCheck4Completion(!check4Completion);
  //   if (
  //     capCompletion &&
  //     p2Completion &&
  //     p3Completion &&
  //     p4Completion &&
  //     p5Completion &&
  //     check1Completion &&
  //     check2Completion &&
  //     check3Completion &&
  //     check4Completion
  //   ) {
  //     console.log('FWEHOFWEIOEFOIOHIEFOHIEF');
  //     setFormCompletion(true);
  //   } else setFormCompletion(false);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      createTeam({
        teamName,
        sub1IGN,
        sub2IGN,
        coachIGN,
        coachDiscord,
        managerDiscord,
      })
    );
    await dispatch(
      addCaptain({
        captainFName,
        captainLName,
        captainInGameName,
        captainRank,
        captainDiscord,
        teamName,
      })
    );
    await dispatch(
      addPlayer2({ p2FName, p2LName, p2InGameName, p2Rank, teamName })
    );
    await dispatch(
      addPlayer3({ p3FName, p3LName, p3InGameName, p3Rank, teamName })
    );
    await dispatch(
      addPlayer4({ p4FName, p4LName, p4InGameName, p4Rank, teamName })
    );
    await dispatch(
      addPlayer5({ p5FName, p5LName, p5InGameName, p5Rank, teamName })
    );
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
    <>
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
                  required
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
                  required
                />
              </div>
              <div className="input_area">
                <label htmlFor="ign">IGN</label>
                <input
                  className={`${
                    captainInGameName === null ? 'input_error' : ''
                  }`}
                  type="text"
                  placeholder="IGN#0000"
                  name="ign"
                  onChange={(e) => setCaptainInGameName(e.target.value)}
                  required
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
                  required
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
                  required
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
                  required
                />
              </div>
            </div>
            <button
              className="section_save_btn"
              onClick={handleCaptainSectionSave}
            >
              NEXT
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
                  required
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
                  required
                />
              </div>
              <div className="input_area">
                <label htmlFor="ign">IGN</label>
                <input
                  className={`${p2InGameName === null ? 'input_error' : ''}`}
                  type="text"
                  placeholder="IGN#0000"
                  name="ign"
                  onChange={(e) => setP2InGameName(e.target.value)}
                  required
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
                  required
                />
              </div>
            </div>
            <button
              className="section_save_btn"
              onClick={handlePlayer2SectionSave}
            >
              NEXT
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
                  required
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
                  required
                />
              </div>
              <div className="input_area">
                <label htmlFor="ign">IGN</label>
                <input
                  className={`${p3InGameName === null ? 'input_error' : ''}`}
                  type="text"
                  placeholder="IGN#0000"
                  name="ign"
                  onChange={(e) => setP3InGameName(e.target.value)}
                  required
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
                  required
                />
              </div>
            </div>
            <button
              className="section_save_btn"
              onClick={handlePlayer3SectionSave}
            >
              NEXT
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
                  required
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
                  required
                />
              </div>
              <div className="input_area">
                <label htmlFor="ign">IGN</label>
                <input
                  className={`${p4InGameName === null ? 'input_error' : ''}`}
                  type="text"
                  placeholder="IGN#0000"
                  name="ign"
                  onChange={(e) => setP4InGameName(e.target.value)}
                  required
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
                  required
                />
              </div>
            </div>
            <button
              className="section_save_btn"
              onClick={handlePlayer4SectionSave}
            >
              NEXT
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
                  required
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
                  required
                />
              </div>
              <div className="input_area">
                <label htmlFor="ign">IGN</label>
                <input
                  className={`${p5InGameName === null ? 'input_error' : ''}`}
                  type="text"
                  placeholder="IGN#0000"
                  name="ign"
                  onChange={(e) => setP5InGameName(e.target.value)}
                  required
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
                  required
                />
              </div>
            </div>
            <button
              className="section_save_btn"
              onClick={handlePlayer5SectionSave}
            >
              NEXT
            </button>
          </div>
        </div>
        {/* OPTIONALS */}
        <div className="form_content_container form_content_optionals">
          <button
            ref={(el) => (ref.current[5] = el)}
            className={`form_content_title ${
              p5Completion ? 'complete active' : ''
            }`}
          >
            Subs/Manager/Coach (optional)
          </button>
          <div className="form_content_collapsible">
            <div className="form_content">
              <div className="input_area">
                <label htmlFor="sub1IGN">Sub 1 IGN</label>
                <input
                  type="text"
                  placeholder="Sub 1 IGN#0000"
                  name="sub1IGN"
                  onChange={(e) => setSub1IGN(e.target.value)}
                />
              </div>
              <div className="input_area">
                <label htmlFor="sub2IGN">Sub 2 IGN</label>
                <input
                  type="text"
                  placeholder="Sub 2 IGN#0000"
                  name="sub2IGN"
                  onChange={(e) => setSub2IGN(e.target.value)}
                />
              </div>
              <div className="input_area">
                <label htmlFor="coachIGN">Coach IGN</label>
                <input
                  type="text"
                  placeholder="Coach IGN#0000"
                  name="coachIGN"
                  onChange={(e) => setCoachIGN(e.target.value)}
                />
              </div>
              <div className="input_area">
                <label htmlFor="coachDisc">Coach Discord</label>
                <input
                  type="text"
                  placeholder="Coach Discord#0000"
                  name="coachDisc"
                  onChange={(e) => setCoachDiscord(e.target.value)}
                />
              </div>
              <div className="input_area">
                <label htmlFor="mngrDisc">Manager Discord</label>
                <input
                  type="text"
                  placeholder="Manager Discord#0000"
                  name="mngrDisc"
                  onChange={(e) => setManagerDiscord(e.target.value)}
                />
              </div>
            </div>
            <button
              className="section_save_btn"
              onClick={handleOptionalsSection}
            >
              NEXT
            </button>
          </div>
        </div>
        <p>
          Please send this waiver to your team and review it in its entirety so
          you may accept the terms on behalf of yourself and your four other
          team members as well.
        </p>
        <a
          href="https://docs.google.com/document/d/1_HNi7EuyGbMtnAnpf1zQ24jUHaV4KwXwBca99XgSlF4/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          WAIVER FORM
        </a>
        <div className="checkbox_container">
          <div className="checkbox_container_content">
            <input
              type="checkbox"
              onChange={handleCheck}
              name="waiver"
              required
            ></input>
            <label>
              I hereby represent that I am eighteen (18) years of age or older
              and I am competent to contract in my own name for the state of
              Pennsylvania. If I live in another state or country, I am of the
              age necessary to enter into contracts according to the laws of my
              home state or country.
            </label>
          </div>
          <div className="checkbox_container_content">
            <input
              type="checkbox"
              onChange={handleCheck}
              name="waiver"
              required
            ></input>
            <label>
              I herby state that I along with the rest of my team, identify as a
              person of marginalized gender. (We, the organization, may request
              further identification if needed by contacting the captain of the
              team)
            </label>
          </div>
          <div className="checkbox_container_content">
            <input
              type="checkbox"
              onChange={handleCheck}
              name="waiver"
              required
            ></input>
            <label>
              I agree to have one person Venmo the NON-REFUNDABLE entrance fee
              for the whole team ($25) to @Choi-Gloria by JANUARY 3rd - (Please
              include "Entrance fee for the 2023 Alibi Invitational for
              *TEAMNAME*" in the description of the payment)
            </label>
          </div>

          <div className="checkbox_container_content">
            <input
              type="checkbox"
              onChange={handleCheck}
              name="waiver"
              required
            ></input>
            <label>
              I herby state that I am the representative of the team members
              whose names are listed in the registration form above. On behalf
              of the team who has given me permission, I, the representative, am
              accepting the terms of the wavier <strong>as well as</strong> all
              of the previous statements on their and my behalf by marking this
              checkbox and warranting that they and I fully understand its
              contents. If there are minors on the team, they have been given
              consent by a parent or legal guardian to agree to all of the
              statements listed above.
            </label>
          </div>
        </div>
        {/* BUTTONS */}
        <button
          type="submit"
          className={`${
            formCompletion && state.status !== 'LOADING'
              ? 'submit_btn'
              : 'submit_btn_disabled'
          }`}
          disabled={formCompletion ? false : true}
        >
          {state.status === 'LOADING' ? 'LOADING' : 'SUBMIT'}
        </button>
        {state.status === 'LOADING' ? (
          <p className="loading_msg">
            We apologize for the inconvenience, we are experiencing a high
            volume of registrations, which may delay submissions (~30 seconds).{' '}
            <br></br>PLEASE DO NOT REFRESH OR EXIT THIS PAGE
          </p>
        ) : (
          ''
        )}
      </form>
      {isSubmitted ? (
        state.status === 'REJECTED' ? (
          <ModalError setIsSubmitted={setIsSubmitted} />
        ) : (
          <Modal setIsSubmitted={setIsSubmitted} />
        )
      ) : null}
    </>
  );
};

export default PlayerForm;

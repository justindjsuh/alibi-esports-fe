import PlayerForm from './PlayerForm';

const Form = () => {
  return (
    <div className="form_container">
      <div className="player_form">
        <div className="form_header">
          <p>Registration</p>
        </div>
        <p>
          Please note that by completing this registration, you are committing
          yourself and your team to participate in the Alibi Esports
          Invitational on January 5th at 5 p.m - 10 p.m. and January 6th at 5
          p.m. - 12 a.m. If you do not respect this commitment, the organization
          may blacklist you for future opportunities.<br></br> <br></br>
          Registrations will be available until January 3rd at 8 p.m. <br></br>
          The Invitational will be streamed on our twitch channel:
          <a href="https://www.twitch.tv/alibiesports">
            {' '}
            https://www.twitch.tv/alibiesports
          </a>
          <br></br>
          <br></br>
          <span style={{ fontSize: '18px' }}>DISCLAIMER</span>
          <br></br>The number of matches and therefore the duration of the
          competition can change depending on a variety of reasons including,
          but not exclusive to, your team's placement, your team's results, and
          results of BO3 games. <br></br> If there are changes in your team,
          don't forget to contact us before January 4th! (ex. player IGN change,
          Discord name change, change in roster, etc.)
          <br></br>
          DON'T FORGET TO JOIN OUR DISCORD SERVER:{' '}
          <a href="https://discord.gg/GPyFsyJ7Nn">
            {' '}
            https://discord.gg/GPyFsyJ7Nn
          </a>
          <br></br> It is not required by any means. However, we'll be able to
          assist you and your team best if you are in our discord.
          <br></br>
          <br></br>If you any further questions, please reach out to an admin
          via our Discord, or contact us at help.alibiesports@gmail.com{' '}
          <br></br>This competition is not affiliated with or sponsored by Riot
          Games, Inc. or VALORANT Esports.
        </p>
        <div className="form_header">
          <p>Team Information</p>
        </div>
        <PlayerForm />
      </div>
    </div>
  );
};

export default Form;
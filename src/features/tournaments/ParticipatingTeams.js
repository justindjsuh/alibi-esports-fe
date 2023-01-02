import { useEffect } from 'react';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTeams, selectTeams } from '../teams/teamsSlice';

const ParticipatingTeams = () => {
  const dispatch = useDispatch();

  const teams = useSelector(selectTeams);
  const { teamList } = teams;

  useEffect(() => {
    dispatch(fetchAllTeams());
  }, [dispatch]);

  return (
    <div className="participating_teams_section">
      <p className="section_title">PARTICIPATING TEAMS</p>
      <div className="all_teams_container">
        {teamList.map((team) => (
          <div className="team_container" key={uuid()}>
            <img src="../img/V_Logomark_Red.png" alt="valorant logo" />
            <p className="team_name">{team.name}</p>
            {team.players.map((player) => (
              <div className="player_list" key={uuid()}>
                {player.ign}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipatingTeams;

import { useEffect } from 'react';

const Tournaments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tournament_info_container">
      <div className="tournament_info">
        <div className="tournament_header">
          <img src="../img/logo_square.png" alt="square alibi logo" />
          <div className="tournament_details">
            <p className="tournament_name">Alibi Invitational</p>
            <div className="tournament_specifics">
              <p>
                <span>DATES</span>
                <br></br> Jan 05 - 06, 2023
              </p>
              <p>
                <span>PRIZE POOL</span>
                <br></br> TBD
              </p>
              <p>
                <span>REGION</span>
                <br></br> NA
              </p>
            </div>
          </div>
        </div>
        <div className="tournament_placement">
          <p className="table_title">PRIZE DISTRIBUTION</p>
          <table>
            <thead>
              <tr className="prize_dist_header">
                <th colSpan="1">Place</th>
                <th colSpan="1">Prize</th>
                <th colSpan="1">Team</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st</td>
                <td>50%</td>
                <td style={{ width: '600px' }}>TBD</td>
              </tr>
              <tr>
                <td>2nd</td>
                <td>30%</td>
                <td style={{ width: '600px' }}>TBD</td>
              </tr>
              <tr>
                <td>3rd - 4th</td>
                <td>10%</td>
                <td style={{ width: '600px' }}>TBD</td>
              </tr>
              <tr>
                <td>3rd - 4th</td>
                <td>10%</td>
                <td style={{ width: '600px' }}>TBD</td>
              </tr>
              {/* <tr className='collapsed_row'>
                <td>5th - 8th</td>
                <td>TBD</td>
                <td style={{ width: '600px' }}>TBD</td>
              </tr>
              <tr>
                <td>5th - 8th</td>
                <td>TBD</td>
                <td style={{ width: '600px' }}>TBD</td>
              </tr>
              <tr>
                <td>5th - 8th</td>
                <td>TBD</td>
                <td style={{ width: '600px' }}>TBD</td>
              </tr>
              <tr>
                <td>5th - 8th</td>
                <td>TBD</td>
                <td style={{ width: '600px' }}>TBD</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <p className="temp">MORE DETAILS TO COME SOON</p>
      </div>
    </div>
  );
};

export default Tournaments;

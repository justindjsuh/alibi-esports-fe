import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="upper_footer">
          <div className="footer_content">
            <div className="footer_col">
              <p>
                <a href="#section1_top">About</a>
              </p>
              <p>
                <Link to="/tournaments">Tournaments</Link>
              </p>
              <p>Contact Us</p>
            </div>
            <div className="footer_col footer_last_col">
              <p className="footer_discord">
                <a
                  href="https://discord.gg/GPyFsyJ7Nn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </p>
              <p className="footer_twitch">
                <a
                  href="https://www.twitch.tv/alibiesports"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitch
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p className="footer_copyright">EST. 2020 Alibi Esports </p>
      </div>
    </footer>
  );
};

export default Footer;

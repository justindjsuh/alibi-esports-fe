import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <Link to="/">
          <div className="header_img">
            <img src="../img/banner_white_mont.png" alt="logo" />
          </div>
        </Link>

        <nav className="header_nav">
          <Link to="/">Homepage</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/players">Players</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

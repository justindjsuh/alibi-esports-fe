import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <Link to="/">
          <div className="header_img">
            {/* <img src="../img/banner_white_mont.png" alt="logo" /> */}
            <img src="./img/test_logo.png" alt="logo" />
          </div>
        </Link>

        <nav className="header_nav">
          <Link to="/">
            <p className="header_underline_animation">Homepage</p>
          </Link>
          <Link to="/teams">
            <p className="header_underline_animation">Tournaments</p>
          </Link>
          <Link to="/players" id="header_accent_btn">
            <p>Register</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

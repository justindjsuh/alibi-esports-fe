import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation;

  return (
    <footer className="footer">
      <p>About</p>
      <p>Tournaments</p>
      <p>Contact Us</p>
    </footer>
  );
};

export default Footer;

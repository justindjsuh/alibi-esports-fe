import { Link } from 'react-router-dom';

const Public = () => {
  return (
    <div className="public_container">
      <div className="public_card">
        <div className="public_card_title">
          <p>Tournaments</p>
        </div>
        <div className="public_card_item">
          <div className="public_card_img">
            <img src="../img/valorant_logo.jpg" alt="valorant logo" />
          </div>
          <div className="public_card_content">
            <p className="public_card_content_title">Valorant Invitational</p>
            <p>3/15/2022-3/16/2022</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum neque egestas congue quisque egestas diam. Vulputate eu
              scelerisque felis imperdiet proin fermentum leo. Imperdiet proin
              fermentum leo vel orci. Turpis massa tincidunt dui ut ornare
              lectus sit. Praesent elementum facilisis leo vel fringilla est.
              Velit euismod in pellentesque massa placerat duis ultricies lacus
              sed.
            </p>
            <Link to={'/'} className="public_card_link">
              <span>READ MORE &rarr;</span>
            </Link>
          </div>
          <div className="public_card_btns">
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Public;

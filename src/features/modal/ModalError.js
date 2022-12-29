import React, { useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

const ModalError = ({ setIsSubmitted }) => {
  const navigate = useNavigate();
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setIsSubmitted(false);
      navigate('/tournaments');
    }
  };

  const handleConfirm = () => {
    setIsSubmitted(false);
    navigate('/tournaments');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return ReactDOM.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <div className="modal_header">
          <p>Uh oh. Looks like some kind of error occurred</p>
        </div>
        <div className="modal_content">
          <p>
            Please contact us at help.alibiesports@gmail.com OR reach out to an
            admin on our Discord.
            <br></br> We'll do our best to get you registered and ready to go
            for this tournament!
          </p>
          <div className="modal_socials">
            <a
              className="modal_discord"
              href="https://discord.gg/GPyFsyJ7Nn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            <a
              className="modal_twitch"
              href="https://www.twitch.tv/alibiesports"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitch
            </a>
          </div>
        </div>
        <div className="modal_button">
          <button onClick={handleConfirm}>Tournament Details</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default ModalError;

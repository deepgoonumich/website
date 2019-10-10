import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className="social-container">
      <a
        href="https://github.com/deepgoonumich" target="_blank" rel="noopener noreferrer"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/DeEpGOon" target="_blank" rel="noopener noreferrer"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/deepgoon/"  target="_blank" rel="noopener noreferrer" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/deepgoon_/" target="_blank" rel="noopener noreferrer"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default Footer;
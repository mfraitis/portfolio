import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <section className="social-container">
      <a
        // href="https://www.youtube.com/watch?v=uwVM73lNeeQ"
        href="https://www.youtube.com"
        className="social youtube"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.instagram.com" className="social instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com" className="social facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="social twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://github.com/mfraitis" className="social github">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a
        href="https://www.linkedin.com/in/mohamed-fraitis"
        className="social linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </section>
  );
};

export default SocialMedia;

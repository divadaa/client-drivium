import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import './styles.scss';

export default function Footer() {
  return (
    <footer className="Footer">
      <ul className="Footer__social-icons__list">
        <li>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="Footer__social-icons"
          />
        </a>
        </li>
        <li>
        <a href="https://www.snapchat.com/">
          <FontAwesomeIcon icon={faSnapchat} className="Footer__social-icons" />
        </a>
        </li>
        <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} className="Footer__social-icons" />
        </a>
        </li>
        <li>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} className="Footer__social-icons" />
        </a>
        </li>
      </ul>

      <ul className="Footer__list">
        <li className="listFooterItem">
          <a href="https://www.google.com/">Home</a>
        </li>
        <li className="listFooterItem">
          <a href="https://www.google.com/">Services</a>
        </li>
        <li className="listFooterItem">
          <a href="https://www.google.com/">About</a>
        </li>
        <li className="listFooterItem">
          <a href="https://www.google.com/">Terms</a>
        </li>
        <li className="listFooterItem">
          <a href="https://www.google.com/">Privacy Policy</a>
        </li>
      </ul>

      <div className="Footer__copyright">
        <p>DRIVIUM © 2021</p>
      </div>
    </footer>
  );
}

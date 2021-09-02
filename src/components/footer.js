import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faMeetup,
  faDiscord,
  faSlack,
  faGithub,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import componentStyles from './footer.module.css';

import Connect from '../assets/Connect.svg';
function footer() {
  return (
    <footer>
      <nav className={componentStyles.footerNav}>
        <Connect className={componentStyles.connectLogo} alt={`Connect Logo`} />
        <div className={componentStyles.socials}>
          <a
            href="https://www.meetup.com/freeCodeCamp-Nashville/"
            aria-label="Meetup"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faMeetup} size="1x" color="#444444" />
          </a>
          <a
            href="https://discord.gg/cX9BkKrAPV"
            aria-label="Discord"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDiscord} size="1x" color="#444444" />
          </a>
          <a
            href="https://nashdev.com/"
            aria-label="Slack"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSlack} size="1x" color="#444444" />
          </a>
          <a
            href="https://github.com/nashvillefcc/"
            aria-label="GitHub"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" color="#444444" />
          </a>
          <a
            href="https://twitter.com/nashvillefcc/"
            aria-label="Twitter"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} size="1x" color="#444444" />
          </a>
          <a
            href="https://www.facebook.com/groups/free.code.camp.nashville/permalink/1479740658703738/"
            aria-label="Facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="1x" color="#444444" />
          </a>
        </div>
        <div className={componentStyles.emailAndCopyright}>
          <div>
            <a
              href="mailto:info@nashvillefcc.com"
              className={componentStyles.emailLink}
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
              <p className={componentStyles.emailName}>info@nashvillefcc.com</p>{' '}
              {/* This will change to something else once we setup a domain */}
            </a>
            <p>© 2021 FreeCodeCamp Nashville</p>
          </div>

          <a href="https://www.netlify.com">
            <img
              src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default footer;

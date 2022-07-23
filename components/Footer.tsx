import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <footer className='flex flex-col items-center gap-4 pt-8 pb-12'>
      <div className='flex items-center justify-center gap-4'>
        <a href='https://github.com/ivanolmo' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <a
          href='https://linkedin.com/in/ivan-olmo'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
        <a
          href='https://twitter.com/ivanbrolmo'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} size='2x' />
        </a>
        <a href='mailto:mail@mail.com'>
          <FontAwesomeIcon icon={faAt} size='2x' />
        </a>
      </div>
      <div>
        <span>
          {/* year in JS */}
          <FontAwesomeIcon icon={faCopyright} size='1x' /> 2022 Ivan Olmo
        </span>
      </div>
    </footer>
  );
}

export default Footer;

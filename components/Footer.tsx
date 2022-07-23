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
    <footer className='flex flex-col items-center gap-4 py-12'>
      <div className='flex items-center justify-center gap-4'>
        <a href='https://github.com/ivanolmo' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='2x' color='#171515' />
        </a>
        <a
          href='https://linkedin.com/in/ivan-olmo'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} size='2x' color='#0072b1' />
        </a>
        <a
          href='https://twitter.com/ivanbrolmo'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} size='2x' color='#1da1f2' />
        </a>
        <a href='mailto:mail@mail.com'>
          <FontAwesomeIcon icon={faAt} size='2x' color='#de5246' />
        </a>
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faCopyright} size='1x' />{' '}
          {new Date().getFullYear()} Ivan Olmo
        </span>
      </div>
    </footer>
  );
}

export default Footer;

import Link from 'next/link';
import { RiTwitterFill, RiInstagramLine } from 'react-icons/ri';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Link href='/'>Monir Hossain</Link>
      </div>
      <div className='header__nav'>
        <ul>
          <li>
            <a href='https://twitter.com/MonirHossainPro' target='_blank' rel='noreferrer'>
              <RiTwitterFill />
            </a>
          </li>
          <li>
            <a href='https://instagram.com/MonirHossainPro' target='_blank' rel='noreferrer'>
              <RiInstagramLine />
            </a>
          </li>
          {/* <li>
            <a href='https://linkedin.com/MonirHossainPro'>
              <RiLinkedinBoxFill />
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;

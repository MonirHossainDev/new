import { useState } from 'react';
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header className='header'>
      <div className='header__logo'>
        <a href=''>Monir Hossain</a>
      </div>
      <div className='header__nav'>
        <ul>
          <li>
            <a href=''>About Me</a>
          </li>
          <li>
            <a href=''>FB Group</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

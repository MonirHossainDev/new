import { useState } from 'react';
const LeftSidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className={click ? 'content__nav active' : 'content__nav'}>
        <ul className='mobile-nav'>
          <li>
            <a href=''>About Me</a>
          </li>
          <li>
            <a href=''>FB Group</a>
          </li>
        </ul>
        <p className='works-nav'>WORKS BY CATEGORY</p>
        <ul>
          <li>
            <a href=''>All Works (30)</a>
          </li>
          <li>
            <a href=''>Agency (05)</a>
          </li>
          <li>
            <a href=''>Animal (15)</a>
          </li>
          <li>
            <a href=''>Freelance (10)</a>
          </li>
          <li>
            <a href=''>React JS (10)</a>
          </li>
          <li>
            <a href=''>WordPress (10)</a>
          </li>
        </ul>
        <div className='footer'>
          <p> Monir Hossain &copy; 2021</p>
        </div>
      </div>
      <div className={click ? 'togller active' : 'togller'} onClick={handleClick}>
        {click ? 'Close' : 'Menu'}
      </div>
      <div className={click ? 'mobile-body-overly active' : 'mobile-body-overly'} onClick={closeMobileMenu}></div>
    </>
  );
};

export default LeftSidebar;

import { useState } from 'react';
import Link from 'next/link';
import { RiCloseCircleLine, RiMenu2Fill } from 'react-icons/ri';
const LeftContent = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className={click ? 'content__left active' : 'content__left'}>
        <div className='user-nav'>
          <ul>
            <li onClick={closeMobileMenu}>
              <Link href='/'>Home</Link>
            </li>
            {/* <li>
            <Link href='/about'>About Me</Link>
          </li>
          <li>
            <Link href='/hire-me'>Hire Me</Link>
          </li> */}
          </ul>
        </div>
        <div className='portfolio-nav'>
          <span>Portfolio Categories</span>
          <ul>
            <li onClick={closeMobileMenu}>
              <Link href='/portfolio'>All Portfolio</Link>
            </li>

            {/* <li>
              <Link href='/'>Admin Dashboards</Link>
            </li>
            <li>
              <Link href='/'>Agency</Link>
            </li>
            <li>
              <Link href='/'>Animal</Link>
            </li>
            <li>
              <Link href='/'>App Landing Page</Link>
            </li>
            <li>
              <Link href='/'>Architects</Link>
            </li>
            <li>
              <Link href='/'>Barber</Link>
            </li>
            <li>
              <Link href='/'>Blog</Link>
            </li>
           */}

            <li onClick={closeMobileMenu}>
              <Link href='/portfolio/bootstrap'>Bootstrap</Link>
            </li>

            {/* <li>
              <Link href='/'>Business</Link>
            </li>
            <li>
              <Link href='/'>Charity / Non-profit</Link>
            </li>
            <li>
              <Link href='/'>Construction</Link>
            </li>
            <li>
              <Link href='/'>Consulting</Link>
            </li>
            <li>
              <Link href='/'>Creative</Link>
            </li>
            <li>
              <Link href='/'>Directorye</Link>
            </li>
            <li>
              <Link href='/'>Commerce</Link>
            </li>
            <li>
              <Link href='/'>Education</Link>
            </li>
            <li>
              <Link href='/'>Event</Link>
            </li>
            <li>
              <Link href='/'>Fashion</Link>
            </li>
            <li>
              <Link href='/'>Finance</Link>
            </li>
            <li>
              <Link href='/'>Food / Drinks</Link>
            </li>
            <li>
              <Link href='/'>Freelance Projects</Link>
            </li>
            <li>
              <Link href='/'>Gallery</Link>
            </li>
            <li>
              <Link href='/'>Gaming</Link>
            </li>
            <li>
              <Link href='/'>Health / Fitness</Link>
            </li>
            <li>
              <Link href='/'>Hotel</Link>
            </li>
            <li>
              <Link href='/'>Industrial</Link>
            </li>
            <li>
              <Link href='/'>Interior Design</Link>
            </li>
            <li>
              <Link href='/'>Job Board</Link>
            </li>
            <li>
              <Link href='/'>Landing Page</Link>
            </li>
            <li>
              <Link href='/'>Lawyer</Link>
            </li>
            <li>
              <Link href='/'>Magazine</Link>
            </li>
            <li>
              <Link href='/'>Medical</Link>
            </li>
            <li>
              <Link href='/'>Music</Link>
            </li>
            <li>
              <Link href='/'>One Page</Link>
            </li>
            <li>
              <Link href='/'>Personal</Link>
            </li>
            <li>
              <Link href='/'>Photography</Link>
            </li>
            <li>
              <Link href='/'>Portfolio</Link>
            </li>
            <li>
              <Link href='/'>Real Estate</Link>
            </li>
            <li>
              <Link href='/'>Restaurant</Link>
            </li>
            <li>
              <Link href='/'>Resume</Link>
            </li>
            <li>
              <Link href='/'>SEO</Link>
            </li>
            <li>
              <Link href='/'>Startup</Link>
            </li>
            <li>
              <Link href='/'>Transportation</Link>
            </li>
            <li>
              <Link href='/'>Travel</Link>
            </li>
            <li>
              <Link href='/'>UI Kits</Link>
            </li>
            <li>
              <Link href='/'>Under Construction</Link>
            </li>
            <li>
              <Link href='/'>Web Hosting</Link>
            </li>
            <li>
              <Link href='/'>Wedding</Link>
            </li>
            <li>
              <Link href='/'>WordPress</Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className={click ? 'togller active' : 'togller'} onClick={handleClick}>
        {click ? <RiCloseCircleLine /> : <RiMenu2Fill />}
      </div>
      <div className={click ? 'mobile-body-overly active' : 'mobile-body-overly'} onClick={closeMobileMenu}></div>
    </>
  );
};

export default LeftContent;

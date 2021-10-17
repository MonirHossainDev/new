import Link from 'next/link';
import { OrganixPortfolio } from '../../../components';
const Bootstrap5 = () => {
  return (
    <>
      <div className='page-title'>
        <h3>My Portfolio</h3>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/portfolio'>All Portfolio</Link>
          </li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <OrganixPortfolio />
    </>
  );
};

export default Bootstrap5;

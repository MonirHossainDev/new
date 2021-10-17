import Link from 'next/link';
import { OrganixPortfolio } from '../../components';

const index = () => {
  return (
    <div>
      <div className='page-title'>
        <h3>My Portfolio</h3>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>All Portfolio</li>
        </ul>
      </div>
      <OrganixPortfolio />
    </div>
  );
};

export default index;

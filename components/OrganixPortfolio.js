import Link from 'next/link';
import Image from 'next/image';
import { Shimmer, ToBase64 } from '../components';
const OrganixPortfolio = () => {
  return (
    <article className='post'>
      <Link href='/portfolio/organix'>
        <a>
          <Image
            src='/img/portfolio/img2.jpg'
            width='800'
            height='420'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${ToBase64(Shimmer(800, 420))}`}
            alt='Organix'
            layout='responsive'
          />
        </a>
      </Link>
      <div className='post__info'>
        <h4>
          <Link href='/portfolio/organix'>Organix</Link>
        </h4>

        <ul className='post__info--meta'>
          <li>
            <Link href='/portfolio/bootstrap'>Bootstrap</Link>
          </li>
        </ul>
        <p className='post__info--excerpt'>
          Organix is an outstanding, clean and modern organic food website template for building an impactful eCommerce page. If that is on your to-do
          list, you came to the right place, as Organix will be of tremendous help.
        </p>
      </div>
    </article>
  );
};

export default OrganixPortfolio;

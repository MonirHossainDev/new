import Link from 'next/link';
import Image from 'next/image';
import { Shimmer, ToBase64 } from '../../components';
const OrganixSingle = () => {
  return (
    <>
      <div className='page-title'>
        <h3>My Portfolio</h3>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/portfolio'>All Portfolo</Link>
          </li>
          <li>
            <Link href='/portfolio/bootstrap'>Bootstrap</Link>
          </li>
          <li>Organix</li>
        </ul>
      </div>
      <article className='single-post'>
        <Image
          src='/img/portfolio/img2.jpg'
          width='800'
          height='420'
          placeholder='blur'
          blurDataURL={`data:image/svg+xml;base64,${ToBase64(Shimmer(800, 420))}`}
          alt='Organix'
          layout='responsive'
        />
        <div className='single-post__header'>
          <h4>Organix</h4>
          <ul className='single-post__header--meta'>
            <li>
              <Link href='/portfolio/bootstrap'>Bootstrap</Link>
            </li>
          </ul>
        </div>
        <div className='single-post__desc'>
          Create a strong and memorable first impression with a one-page business website template, Imagine. This remarkable site canvas has a clean
          and minimalistic look that will display your content beautifully.
          <div className='d-grid grid-temp-2 mt-20'>
            <a className='btn btn-primary' href='https://monirhossain.com'>
              Preview
            </a>
            <a className='btn btn-secondary' href='https://monirhossain.com'>
              Download
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default OrganixSingle;

import Link from 'next/link';
import Image from 'next/image';
const SingleArticle = () => {
  return (
    <div>
      <div className='page-title'>
        <h3>Bootstrap Templates</h3>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>All Portfolo</a>
          </li>
          <li>Bootstrap Templates</li>
        </ul>
      </div>

      <article className='single-post'>
        <Image
          src='/img/portfolio/img1.jpg'
          width='800'
          height='420'
          // placeholder='blur'
          alt='Felt Moon'
          layout='responsive'
        />
        <div className='single-post__header'>
          <h4>Unify</h4>
          <ul className='single-post__header--meta'>
            <li>
              <Link href='/agency'>Agency,</Link>
            </li>
            <li>
              <Link href='/agency'>Portfolio</Link>
            </li>
          </ul>
        </div>
        <div className='single-post__desc'>
          Create a strong and memorable first impression with a one-page business website template, Imagine. This remarkable site canvas has a clean
          and minimalistic look that will display your content beautifully.
          <div className='d-grid grid-temp-2 mt-20'>
            <a className='btn btn-primary' href=''>
              Preview
            </a>
            <a className='btn btn-secondary' href=''>
              Download
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SingleArticle;

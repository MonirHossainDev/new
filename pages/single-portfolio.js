import Link from 'next/link';
const SinglePortfolio = () => {
  return (
    <div className='py-20'>
      <Link href='/'>
        <a className='btn-text'>Back</a>
      </Link>

      <article className='single-post'>
        <div className='single-post__img'></div>
        <div className='single-post__info'>
          <h3>Ogani</h3>
          <ul className='single-post__info--meta'>
            <li>
              <a href=''>Bootstrap,</a>
            </li>
            <li>
              <a href=''>Freelance Projects</a>
            </li>
          </ul>
          <div className='single-post__info--content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt fugiat maxime ipsam temporibus culpa necessitatibus, aut amet
            sapiente ullam laboriosam ab cumque enim mollitia nam nisi! Magnam, architecto nihil!
          </div>
        </div>
      </article>
    </div>
  );
};

export default SinglePortfolio;

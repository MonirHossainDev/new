import Meta from './Meta';
import Header from './Header';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <section className='content'>
        <LeftContent />
        <div className='content__main'>{children}</div>
        <RightContent />
      </section>
    </>
  );
};

export default Layout;

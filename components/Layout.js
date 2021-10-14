import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className='main'>
        <div className='content'>
          <div className='content__area'>
            <main className='content__area--main'>
              <section>{children}</section>
            </main>
            <RightSidebar />
          </div>
          <LeftSidebar />
        </div>
      </section>
    </>
  );
};

export default Layout;

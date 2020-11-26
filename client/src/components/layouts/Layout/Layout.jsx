import Footer from "./Footer";
import Header from './Header'

function Layout({ children, darkMode, setDarkMode }) {
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} / >
      <div className='layout-children' style={{minHeight: '800px'}}>
        {children}
        </div>
      <Footer />
    </>
  );
}

export default Layout;

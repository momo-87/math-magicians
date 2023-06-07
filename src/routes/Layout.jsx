import Navbar from 'components/Navbar';
import 'styles/navbarStyle.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="navbarWrapper">
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;

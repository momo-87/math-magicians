import logo from 'assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'calculator', text: 'Calculator' },
    { path: 'quote', text: 'Quote' },
  ];

  return (
    <header>
      <nav>
        <div className="logoBox">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;

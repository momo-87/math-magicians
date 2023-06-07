import 'styles/navbarStyle.scss';
import logo from 'assets/logo.png';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'calculator', text: 'Calculator' },
    { path: 'quote', text: 'Quote' },
  ];

  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.path}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;

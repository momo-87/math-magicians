import logo from 'assets/logo.png';

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
              <a href={link.path}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;

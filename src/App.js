import Calculator from 'components/Calculator';
import DisplayQuote from 'components/DisplayQuote';
import backgroundMobile from 'assets/backgroundMobile.jpg';
import background from 'assets/background.jpg';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '40px',
    minHeight: '100vh',
    backgroundImage: window.matchMedia('(min-width: 768px)').matches ? `url(${background})` : `url(${backgroundMobile})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'none',
  };
  return (
    <div style={appStyle}>
      <Calculator />
      <DisplayQuote />
    </div>
  );
}

export default App;

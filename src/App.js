import Calculator from 'components/Calculator';
import DisplayQuote from 'components/DisplayQuote';
import background from 'assets/background.jpg';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '40px',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: '100%',
  };
  return (
    <div style={appStyle}>
      <Calculator />
      <DisplayQuote />
    </div>
  );
}

export default App;

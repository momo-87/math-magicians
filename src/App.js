import Calculator from 'components/Calculator';
import DisplayQuote from 'components/DisplayQuote';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '40px',
  };
  return (
    <div style={appStyle}>
      <Calculator />
      <DisplayQuote />
    </div>
  );
}

export default App;

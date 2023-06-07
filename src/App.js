import { Routes, Route } from 'react-router-dom';
import CalculatorPage from 'routes/CalculatorPage';
import Quote from 'routes/Quote';
import Home from 'routes/Home';
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
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<CalculatorPage />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;

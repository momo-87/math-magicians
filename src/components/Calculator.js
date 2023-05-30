const CalculatorDesign = () => {
  const Input = () => (<div className="input-box"><input className="input" type="number" placeholder="0" /></div>);
  const Buttons = () => (
    <>
      <div className="AC-box"><button className="AC-btn" type="button">AC</button></div>
      <div className="plus-minus-box"><button className="plus-minus-btn" type="button">+/-</button></div>
      <div className="percentage-box"><button className="percentage-btn" type="button">%</button></div>
      <div className="operator-btn"><button className="division" type="button">÷</button></div>
      <div className="number-btn"><button className="number-btn" type="button">7</button></div>
      <div className="number-btn"><button className="number-btn" type="button">8</button></div>
      <div className="number-btn"><button className="number-btn" type="button">9</button></div>
      <div className="operator-btn"><button className="multiplication" type="button">x</button></div>
      <div className="number-btn"><button className="number-btn" type="button">4</button></div>
      <div className="number-btn"><button className="number-btn" type="button">5</button></div>
      <div className="number-btn"><button className="number-btn" type="button">6</button></div>
      <div className="operator-btn"><button className="soustraction" type="button">-</button></div>
      <div className="number-btn"><button className="number-btn" type="button">1</button></div>
      <div className="number-btn"><button className="number-btn" type="button">2</button></div>
      <div className="number-btn"><button className="number-btn" type="button">3</button></div>
      <div className="operator-btn"><button className="addition" type="button">+</button></div>
      <div className="number-btn zero"><button className="zero" type="button">0</button></div>
      <div className="dot-box"><button className="dot" type="button">.</button></div>
      <div className="operator-btn"><button className="equal" type="button">=</button></div>
    </>
  );

  return (
    <div className="wrapper">
      <Input />
      <Buttons />
    </div>
  );
};
export default CalculatorDesign;

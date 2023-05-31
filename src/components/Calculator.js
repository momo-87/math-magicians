// import { useState } from 'react';
// import calculate from '../logic/calculate';

const Calculator = () => (
  // const [obj, setObject] = useState({ total: '', next: '', operation: '' });

  <div className="wrapper">
    <Input />
    <ACBtn name="AC" />
    <PlusMinusBtn name="+/-" />
    <ModuloBtn name="%" />
    <DivisionBtn name="÷" />
    <SevenBtn name="7" />
    <EightBtn name="8" />
    <NineBtn name="9" />
    <MultiplicationBtn name="x" />
    <FourBtn name="4" />
    <FiveBtn name="5" />
    <SixBtn name="6" />
    <MinusBtn name="-" />
    <OneBtn name="1" />
    <TwoBtn name="2" />
    <ThreeBtn name="3" />
    <PlusBtn name="+" />
    <ZeroBtn name="0" />
    <DotBtn name="." />
    <EqualBtn name="=" />
  </div>
);

// onClick={calculate(obj, props.name)}
const Input = () => (<div className="input-box"><input className="input" type="number" placeholder="0" /></div>);
const ACBtn = () => (<button className=" btn AC-btn" type="button">AC</button>);
const PlusMinusBtn = () => (<button className="btn plus-minus-btn" type="button">+/-</button>);
const ModuloBtn = () => (<button className="btn percentage-btn" type="button">%</button>);
const DivisionBtn = () => (<button className="btn division" type="button">÷</button>);
const SevenBtn = () => (<button className="btn number-btn" type="button">7</button>);
const EightBtn = () => (<button className="btn number-btn" type="button">8</button>);
const NineBtn = () => (<button className="btn number-btn" type="button">9</button>);
const MultiplicationBtn = () => (<button className="btn multiplication" type="button">x</button>);
const FourBtn = () => (<button className="btn number-btn" type="button">4</button>);
const FiveBtn = () => (<button className="btn number-btn" type="button">5</button>);
const SixBtn = () => (<button className="btn number-btn" type="button">6</button>);
const MinusBtn = () => (<button className="btn soustraction" type="button">-</button>);
const OneBtn = () => (<button className="btn number-btn" type="button">1</button>);
const TwoBtn = () => (<button className="btn number-btn" type="button">2</button>);
const ThreeBtn = () => (<button className="btn number-btn" type="button">3</button>);
const PlusBtn = () => (<button className="btn addition" type="button">+</button>);
const ZeroBtn = () => (<button className="btn zero" type="button">0</button>);
const DotBtn = () => (<button className="btn dot" type="button">.</button>);
const EqualBtn = () => (<button className="btn equal" type="button">=</button>);
export default Calculator;

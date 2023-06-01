import { useState } from 'react';
import PropTypes from 'prop-types';

import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({ total: '', next: '', operation: '' });
  return (
    <div className="wrapper">
      <Input data={data} />
      <ACBtn name="AC" data={data} setData={setData} />
      <PlusMinusBtn name="+/-" data={data} setData={setData} />
      <ModuloBtn name="%" data={data} setData={setData} />
      <DivisionBtn name="÷" data={data} setData={setData} />
      <SevenBtn name="7" data={data} setData={setData} />
      <EightBtn name="8" data={data} setData={setData} />
      <NineBtn name="9" data={data} setData={setData} />
      <MultiplicationBtn name="x" data={data} setData={setData} />
      <FourBtn name="4" data={data} setData={setData} />
      <FiveBtn name="5" data={data} setData={setData} />
      <SixBtn name="6" data={data} setData={setData} />
      <MinusBtn name="-" data={data} setData={setData} />
      <OneBtn name="1" data={data} setData={setData} />
      <TwoBtn name="2" data={data} setData={setData} />
      <ThreeBtn name="3" data={data} setData={setData} />
      <PlusBtn name="+" data={data} setData={setData} />
      <ZeroBtn name="0" data={data} setData={setData} />
      <DotBtn name="." data={data} setData={setData} />
      <EqualBtn name="=" data={data} setData={setData} />
    </div>
  );
};
const Input = ({ data }) => (<div className="input-box"><input className="input" type="number" placeholder="0" value={data.next || data.total || ''} readOnly /></div>);

const ACBtn = ({ name, data, setData }) => (<button className=" btn AC-btn" type="button" onClick={() => setData(calculate(data, name))}>AC</button>);
const PlusMinusBtn = ({ name, data, setData }) => (<button className="btn plus-minus-btn" type="button" onClick={() => setData(calculate(data, name))}>+/-</button>);
const ModuloBtn = ({ name, data, setData }) => (<button className="btn modulo-btn" type="button" onClick={() => setData(calculate(data, name))}>%</button>);
const DivisionBtn = ({ name, data, setData }) => (<button className="btn division" type="button" onClick={() => setData(calculate(data, name))}>÷</button>);
const SevenBtn = ({ name, data, setData }) => (<button className="btn number-btn" type="button" onClick={() => setData(calculate(data, name))}>7</button>);
const EightBtn = ({ name, data, setData }) => (<button className="btn number-btn" type="button" onClick={() => setData(calculate(data, name))}>8</button>);
const NineBtn = ({ name, data, setData }) => (<button className="btn number-btn" type="button" onClick={() => setData(calculate(data, name))}>9</button>);
const MultiplicationBtn = ({ name, data, setData }) => (<button className="btn multiplication" type="button" onClick={() => setData(calculate(data, name))}>x</button>);
const FourBtn = ({ name, data, setData }) => (<button className="btn number-btn" type="button" onClick={() => setData(calculate(data, name))}>4</button>);
const FiveBtn = ({ name, data, setData }) => (<button className="btn number-btn" type="button" onClick={() => setData(calculate(data, name))}>5</button>);
const SixBtn = ({ name, data, setData }) => (<button className="btn number-btn" type="button" onClick={() => setData(calculate(data, name))}>6</button>);
const MinusBtn = ({ name, data, setData }) => (<button className="btn soustraction" type="button" onClick={() => setData(calculate(data, name))}>-</button>);
const OneBtn = ({ name, data, setData }) => (<button className="btn number-btn" type="button" onClick={() => setData(calculate(data, name))}>1</button>);
const TwoBtn = ({ name, data, setData }) => (<button className="btn number-btn" type="button" onClick={() => setData(calculate(data, name))}>2</button>);
const ThreeBtn = ({ name, data, setData }) => (<button className="btn number-btn" type="button" onClick={() => setData(calculate(data, name))}>3</button>);
const PlusBtn = ({ name, data, setData }) => (<button className="btn addition" type="button" onClick={() => setData(calculate(data, name))}>+</button>);
const ZeroBtn = ({ name, data, setData }) => (<button className="btn zero" type="button" onClick={() => setData(calculate(data, name))}>0</button>);
const DotBtn = ({ name, data, setData }) => (<button className="btn dot" type="button" onClick={() => setData(calculate(data, name))}>.</button>);
const EqualBtn = ({ name, data, setData }) => (<button className="btn equal" type="button" onClick={() => setData(calculate(data, name))}>=</button>);

Input.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
};
ACBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
PlusMinusBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
ModuloBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
DivisionBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
SevenBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
EightBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
NineBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
MultiplicationBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
FourBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
FiveBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
SixBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
MinusBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
OneBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
TwoBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
ThreeBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
PlusBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
ZeroBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
DotBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};
EqualBtn.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default Calculator;

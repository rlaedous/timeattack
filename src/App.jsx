import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/calculator";

function App() {
  const reduxNumber = useSelector((state) => state.calculator);

  const dispatch = useDispatch();
  const [digit, setDigit] = useState(0);

  const onchangeHandler = (e) => {
    setDigit(+e.target.value);
  };

  const addHandler = () => {
    dispatch(addNumber(digit));
  };

  const minusHandler = () => {
    dispatch(minusNumber(digit));
  };
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input onChange={onchangeHandler} /> 만큼을{" "}
        <button onClick={addHandler}>더할게요</button>{" "}
        <button onClick={minusHandler}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{reduxNumber.number}</p>
      </div>
    </div>
  );
}

export default App;

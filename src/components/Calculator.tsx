import { useState } from "react";

// tentando fazer funcionar operação básica com apenas um algarismo
// inserir no front uma indicação da operação escolhida.


const Calculator = () => {
  const [valueNow, setValueNow] = useState(0);

  //   const [firstValues, setFirstValues] = useState([]);

  const [firstNumber, setFirstNumber] = useState(-1);
  const [secondNumber, setSecondNumber] = useState(-1);

  const [operatorMode, changeOperatorMode] = useState(0);

  const OperatorModeChanger = (type: number) => {
    changeOperatorMode(type);
  };

  const handleClick = (value: number) => {
    setValueNow(value);
    if (operatorMode != 0) return setSecondNumber(value);
    setFirstNumber(value);
  };

  const Result = () => {
    let result;


    if (firstNumber == -1 && secondNumber == -1) return setValueNow(0);

    switch (operatorMode) {
      case 1:
        result = firstNumber + secondNumber;
        setValueNow(result);
        break;
      case 2:
        result = firstNumber - secondNumber;
        setValueNow(result);
        break;
      case 3:
        result = firstNumber * secondNumber;
        setValueNow(result);
        break;
    }

    console.log(firstNumber);
    console.log(secondNumber);
    console.log(operatorMode);

    changeOperatorMode(0);
    setFirstNumber(-1);
    setSecondNumber(-1);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          className="w-72 h-9 border-2 rounded border-zinc-700 text-2xl text-right"
          readOnly
          value={valueNow}
        ></input>

        <div className="w-72 h-64 grid grid-rows-4 grid-flow-col gap-4">
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              setValueNow(0);
              setFirstNumber(-1);
              setSecondNumber(-1);
            }}
          >
            AC
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              OperatorModeChanger(1);
              setValueNow(0);
            }}
          >
            +
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              OperatorModeChanger(2);
              setValueNow(0);
            }}
          >
            -
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              OperatorModeChanger(3);
              setValueNow(0);
            }}
          >
            *
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(7);
            }}
          >
            7
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(4);
            }}
          >
            4
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(1);
            }}
          >
            1
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(0);
            }}
          >
            0
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(8);
            }}
          >
            8
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(5);
            }}
          >
            5
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(2);
            }}
          >
            2
          </button>
          <button className="bg-green-500 rounded hover:opacity-90 font-bold">
            .
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(9);
            }}
          >
            9
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(6);
            }}
          >
            6
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => {
              handleClick(3);
            }}
          >
            3
          </button>
          <button
            className="bg-green-500 rounded hover:opacity-90 font-bold"
            onClick={() => Result()}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;

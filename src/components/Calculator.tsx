import { useState } from "react";

enum OperatorType {
    NOT_SET = 0,
    SOMA = 1,
    SUBTRACAO = 2,
    MULTIPLICACAO = 3
};

const Calculator = () => {
    var [valueNow, setValueNow] = useState("");

    var [firstNumber, setFirstNumber] = useState("");
    var [secondNumber, setSecondNumber] = useState("");

    var [operatorMode, changeOperatorMode] = useState(0);

    const OperatorModeChanger = (type: number) => {
        if (valueNow != "0" && valueNow != "") {
            setFirstNumber(_ => {
                return valueNow;
            });
        }

        if (secondNumber === "" && firstNumber == valueNow) {
            secondNumber = valueNow;
        }
        
        if (secondNumber !== "" && firstNumber !== "") {
            Result();

            setFirstNumber(_ => valueNow);
            // setValueNow(result as string);
            secondNumber = "";
            setSecondNumber("");
        } else {
            setValueNow("0");
        }
        
        changeOperatorMode(type);
    };

    const handleClick = (value: string | number) => {
        var acceptable_value: string;
        if (typeof value == "number") {
            acceptable_value = value.toString();
        } else {
            acceptable_value = value;
        }

        // https://react.dev/reference/react/useState
        setValueNow(prevState => {
            if (prevState != "" && prevState != "0" && prevState != "." && prevState != ",") {
                return prevState + acceptable_value
            } else {
                return acceptable_value;
            }
        });

        if (operatorMode != 0) {
            setSecondNumber(_ => acceptable_value);
        } else {
            setFirstNumber(_ => acceptable_value);
        }
    };

    const Result = () => {
        let result: any; // not recommended unless you know the enviroment well enough

        if (firstNumber == "" && secondNumber == "") 
            return setValueNow(_ => "0");

        if (isNaN(parseFloat(firstNumber))) {
            setFirstNumber(_ => "0");
        };
        if (isNaN(parseFloat(secondNumber))) {
            setSecondNumber(_ => "0");
        };

        switch (operatorMode) {
            case OperatorType.SOMA:
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case OperatorType.SUBTRACAO:
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case OperatorType.MULTIPLICACAO:
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
        }

        if (result == undefined) return;

        valueNow = result;
        setValueNow(_ => {
            return result.toString()
        });

        console.log("first number", firstNumber);
        console.log("second number", secondNumber);
        console.log("operation enum", operatorMode);
        // functions should do only what they say they do.
        //
        // changeOperatorMode(0);
        // setFirstNumber("");
        // setSecondNumber("");
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                <input
                    className="w-72 h-9 border-2 rounded border-zinc-700 text-2xl text-right"
                    readOnly
                    value={valueNow}
                ></input>

                <div className="w-72 h-64 grid grid-rows-5 grid-flow-col gap-4">
                    <button
                        className="bg-green-500 rounded hover:opacity-90 font-bold"
                        onClick={() => {
                            setValueNow("0");
                            setFirstNumber("");
                            setSecondNumber("");
                        }}
                    >
                        AC
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
                            handleClick(8);
                        }}
                    >
                        8
                    </button>
                    <button
                        className="bg-green-500 rounded hover:opacity-90 font-bold"
                        onClick={() => {
                            setValueNow(prev => {
                                if (prev.length > 1)
                                    return prev.slice(0, prev.length - 1);

                                return "0";
                            });
                        }}
                    >
                        DEL
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
                            OperatorModeChanger(1);
                            // setValueNow("0");
                        }}
                    >
                        +
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
                        onClick={() => {
                            handleClick(0);
                        }}
                    >
                        0
                    </button>
                    <button
                        className="bg-green-500 rounded hover:opacity-90 font-bold"
                        onClick={() => {
                            OperatorModeChanger(2);
                            // setValueNow("0");
                        }}
                    >
                        -
                    </button>
                    <button
                        className="bg-green-500 rounded hover:opacity-90 font-bold"
                        onClick={() => {
                            OperatorModeChanger(3);
                            // setValueNow("0");
                        }}
                    >
                        *
                    </button>
                    <button
                        className="bg-green-500 rounded hover:opacity-90 font-bold"
                        onClick={() => {
                            handleClick(".");
                        }}
                    >
                        .
                    </button>
                    <button
                        className="bg-green-500 rounded hover:opacity-90 font-bold"
                        onClick={() => {
                            Result();
                            
                            changeOperatorMode(0);
                            setFirstNumber("");
                            setSecondNumber("");
                        }}
                    >
                        =
                    </button>
                </div>
            </div>
        </>
    );
};

export default Calculator;

import React, { useState } from "react";
import "./calculator.css";



const Calculator = () => {

    // States to handle Inputs Errors and Results

    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [error, seterror] = useState("");
    const [result, setResult] = useState("");

    // this function first convert inputs into number then check validations of the input field if there is issue in input show set error using hook usestate and if there is no isuue run the function result 
    const handleoperator = (e) => {
        var num1 = parseInt(input);
        var num2 = parseInt(input2);

        if (num1 == "") {
            seterror("Num 1 empty")
        }

        else if (!/^[-+]?\d*\.?\d+$/.test(num1)) {
            seterror("Num 1 Is only be integer , positive no. negative no. or floating no.")

        }
        else {
            result()
        }

        if (num2 == "") {
            seterror("Num 2 empty")
        }
        else if (!/^[-+]?\d*\.?\d+$/.test(num2)) {
            seterror("Num 2 Is only be integer , positive no. negative no. or floating no.")

        }
        else {
            result()
        }

        if (num1 == "" && num2 == "") {
            seterror("Num 1 & Num 2 empty")
        }
        else if (!/^[-+]?\d*\.?\d+$/.test(num2, num1)) {
            seterror("Num 1 & Num 2 Is only be integer , positive no. negative no. or floating no.")

        }
        else {
            result()
        }

// in this function check the operator clicked and set the result accordingly
        function result() {
            const operator = e.target.innerText;
            if (operator === "+") {
                setResult(num1 + num2)
            }
            if (operator === "-") {
                setResult(num1 - num2)

            }
            if (operator === "*") {
                setResult(num1 * num2)

            }
            if (operator === "/") {

                setResult(num1 / num2)
            }

        }

    }




    return <div className="main-div">
        {/* heading */}
        <h1>React Calculator</h1>

        {/* input tags */}
        <input type="text" className="input" placeholder="   Num1" value={input} onChange={(e) => { setInput(e.target.value) }}></input>
        <br />
        <input type="text" className="input" placeholder="  Num2" value={input2} onChange={(e) => { setInput2(e.target.value) }}></input>
        <br />

        {/* operators */}
        <div className="opertaors-div">

            <button id="plus" className="operator" onClick={handleoperator}>+</button>
            <button id="minus" className="operator" onClick={handleoperator}>-</button>
            <button id="mutiply" className="operator" onClick={handleoperator}>*</button>
            <button id="divide" className="operator" onClick={handleoperator}>/</button>

        </div>
        <br />
        {/* this div shows the error and results if there is any error so error show through condition rendering and if there is no error then result shows */}
        <div id="error-error-div">
            <div className="error">
                { error ? `Error :  ${error ? error : ''}` : ""  }
            </div>


            <div className="result">
                { result ? `Result = ${result} Success : Your result shown!` : "" }
            </div>
        </div>
    </div>
}

export default Calculator
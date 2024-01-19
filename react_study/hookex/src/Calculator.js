import React, { useState } from "react";

function Calculator(props) {
    const [xvalue, setXvalue] = useState(0);
    const [yvalue, setYvalue] = useState(0);
    const [result, setResult] = useState(0);

    const add = () => {
        console.log(xvalue);
        console.log(yvalue);
        setResult(parseInt(xvalue) + parseInt(yvalue));
    }

    const sub = () => {
        console.log(xvalue);
        console.log(yvalue);
        setResult(parseInt(xvalue) - parseInt(yvalue));
    }

    const mul = () => {
        console.log(xvalue);
        console.log(yvalue);
        setResult(parseInt(xvalue) * parseInt(yvalue));
    }

    const div = () => {
        console.log(xvalue);
        console.log(yvalue);
        setResult(parseInt(xvalue) / parseInt(yvalue));
    }
    
    return ( 
        <>
            <div style={{ textAlign: "center" }}>
                <h1>GCU Calculator</h1>
                <input name='xvalue' onChange={(e)=>{setXvalue(e.target.value)}}/>
                <br/>
                <input name='yvalue' onChange={(e)=>{setYvalue(e.target.value)}}/>
                <br/>
                RESULT: <span id="result">{result}</span><br/><br/>
                <button value="+" onClick={add}>SUM(+)</button>
                <button value="-" onClick={sub}>SUB(-)</button>
                <button value="*" onClick={mul}>MUL(x)</button>
                <button value="/" onClick={div}>DIV(/)</button>
            </div>
        </> 
    );
}

export default Calculator;
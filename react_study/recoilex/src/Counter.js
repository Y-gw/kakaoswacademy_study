import React from 'react';
import { atom, useRecoilState } from 'recoil';

const counterState = atom({
    key: 'counterState', //
    default: 0, //
});

function Counter() {
    const [counter, setCounter] = useRecoilState(counterState);
    const handleIncrease = () => {
        setCounter(counter + 1);
    };
    const handleDecrease = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    );
}

export default Counter
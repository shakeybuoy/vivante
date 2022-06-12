import React, { useState } from 'react'

function Counter({ min, max, value }) {
    var minInt = parseInt(min);
    var maxInt = parseInt(max);
    const [count, setCount] = useState(minInt)
    const decrement = () => {
        (count - 1) >= minInt ? setCount(count - 1) : null;
    }
    const increment = () => {
        (count + 1) <= maxInt ? setCount(count + 1) : null;
    }
    return (
        <div className="flex items-center w-7/12 text-black justify-between">
            <h1 className="capitalize text-2xl  font-semibold">{value}</h1>
            <div className="flex justify-center items-center">
                <button className="text-md h-8 w-8 border font-semibold border-offGray text-offGray rounded-full" onClick={decrement}>-</button>
                <h2 className="text-lg w-10 text-center font-medium">{count}</h2>
                <button className="text-md h-8 w-8 border font-semibold border-offGray text-offGray rounded-full" onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter
import React , {useState} from "react";

function Counter() {   
    const [value, setValue] = useState(0);
    function increment() {
        setValue(value + 1);
    }

    return (
        <div>
            <h2>Counter : {value}</h2>
            <button onClick={increment}>Increment</button>  
            <button onClick={() => setValue(value - 1)}>Decrement</button>
        </div> 
    );
}
export default Counter;
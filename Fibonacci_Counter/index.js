import React, { use, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";


function App(){

    const [number,setNumber]=useState(0);
    const [count ,setCount]=useState(0);

    function Fibonacci(n){
        if(n<=1)
            return n;

        return Fibonacci(n-1)+Fibonacci(n-2);
    }

    // let result = Fibonacci(number);     browser stops working due to this
    // useMemo hook
    const result = useMemo( ()=>{
        return Fibonacci(number);
    } , [number]);

    console.log(result);
    
    return (
        <>
        <h1>Count is {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
         
         
        <div>
            <h1>Fibonacci Number is {result}</h1>
            
            <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}></input>;
        </div>

        </>
    )
}







const root= ReactDOM.createRoot(document.getElementById("root"));
root.render( <App/>);
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";

function  App(){


    const [count ,setCount]=useState(0);
    // let money=0;
    const money = useRef(0);
    
        // console.log(money.current)
;
    return (
        <>
        <h1>Count is {count}</h1>
        <h1>money is {money.current}</h1>
        <h1>gefn</h1>
        <button onClick={()=>setCount(count+1)}>Increment Count</button>
        <button onClick={()=>{
           money.current++;
           console.log(money.current);
        }}>Increment Money </button>
        {/* { console.log(money)} */}
        
        </>
    );

   

}

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
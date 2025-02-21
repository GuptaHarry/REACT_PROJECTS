import { useState } from "react";


export default function Counter(props){
     

     const [count,setCount]=useState(0);
     function increment(){

        setCount(count+1);
     }

     function decrement(){
        setCount(count-1);
     }
    return (
        <>
          <h1>Count is : {count}</h1>
           <button onClick={increment}>Increment</button>
           <button onClick={decrement}>Decrement</button>
        </>
    )
}
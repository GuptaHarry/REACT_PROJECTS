import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./Colorful";
// example -1  useState , useEffect .

// function Main(){

//   const [color,setColor]=useState("black");

// //   console.log("render");
// //   document.body.style.backgroundColor=color;    this makes calls to the function evvery time . -> useEffect
// //   console.log("executed");
  
//    console.log("render");
//    useEffect( ()=>{
//        document.body.style.backgroundColor=color;
//        console.log("executed");
//    },[color]);                                           
//                                                            // [] -> inital render -> then no change bcz none exits to change.
//                                                            // nothing given -> work as normal function
//                                                            // [color]=> inital rneder -> atlast if color value changed only then honga o/w no.
//   return (
//         <>
//         <div className="container">
//         <h2 className="head">Background Color Changer</h2>
//         <div className="btn-container">

//         <button className="btn" onClick={()=>{setColor("red")}}>Red</button>   {/*  onClick={setColor("red")}  => this will give error. bcz we need to pass the refernce fo the function.  */} 
//         <button className="btn" onClick={()=>{setColor("blue")}}>Blue</button>
//         <button className="btn" onClick={()=>{setColor("orange")}}>Orange</button>
//         <button className="btn" onClick={()=>{setColor("green")}}>Green</button>
//         <button className="btn" onClick={()=>{setColor("yellow")}}>Yellow</button>

//         </div>
        
        
//         </div>
//         </>
//     )
// }







// exapmle -2   useState , useEffect , memo

function Main(){
       
    const [count , setCount] = useState(0);

    return ( <>
      <div className="counter">
      <h1>Counter</h1>
      <h2>Count is : {count}</h2>
      <button onClick={()=>{setCount(count+1)}}>Incremnt</button>

      </div>
      
      <Colorful/>
    </>
    );
}







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <Main/>);
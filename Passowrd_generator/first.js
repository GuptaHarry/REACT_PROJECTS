import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function First() {

    // states

   

    const [passowrd,setPassword] = useState("fnwfnenf");
    const [length, setLength] = useState(10);
    const [numberReq , setNumberReq] = useState(false);
    const [specialCharReq , setSpecialCharReq]= useState(false);

    // function generatePassword(){
    //   let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //   if(numberReq)
    //     str+="0123456789";
    //   if(specialCharReq)
    //     str+="!@#$%^&*()_+{}[]?><~`";
      
    //    let ans="";
    //   for(let i=0 ; i<length;i++){
    //     ans+=str[ Math.floor(Math.random()*str.length)];
    //   }

    //   setPassword(ans);      // this is required to make it update every time.
    // }

    // Method-1
    // generatePassword();   // this will give Infinte loops bcz this will cal setPassword again and again ....
    
    const generatePassword = useCallback(()=>{
      let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
       if(numberReq)
         str+="0123456789";
       if(specialCharReq)
         str+="!@#$%^&*()_+{}[]?><~`";
  
        let ans="";
       for(let i=0 ; i<length;i++){
         ans+=str[ Math.floor(Math.random()*str.length)];
       }
      setPassword(ans); 
    } , [length,numberReq,specialCharReq]);


    // Method-2 
    useEffect(()=>{
      generatePassword()
    } , [ length,numberReq,specialCharReq]);      // nw no loop, bcz one time intial render, then if change then only show
    
    //  length , numberReq , specialCharReq ke jagah => generatePassword likh skte baat ek hi hai 
    return (
    <>
    <div className="container">
      <h2 className="head">Passowrd Generator</h2>
      <h3>{passowrd}</h3>
      <div className="btn-container">
        <div className="btn-input">
          <input type="range" min={10} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}}></input>
          <label>Length {length}</label>
        </div>

        <div className="btn-input" defaultChecked={numberReq} onChange={()=>{setNumberReq(!numberReq)}}>
          <input type="checkbox"></input>
          <label>  Number</label>
        </div>

        <div className="btn-input" defaultChecked={specialCharReq} onChange={()=>{setSpecialCharReq(!specialCharReq)}}>
          <input type="checkbox"></input>
          <label>  Special Character</label>
        </div>
      </div>
    </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<First/>);

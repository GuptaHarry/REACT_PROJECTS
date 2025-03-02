import React, { useEffect, useState } from "react";


// for cards display  
//    step-1 fetch the info -> pure data ka useState banaya hai

function Body(){


    const [profile,setProfile] = useState([]);
    const [numberofProfile,setnumberofProfile]= useState("");

   async function generateProfile(count){
       
    // const res = await fetch(`https://api.github.com/users?since=6000&per_page=${count}`);
       let ran = Math.floor(Math.random()*10000+1);

       try{
        const res = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`)
        const data = await res.json();  // bcz convert krne me time lgta hai 
        setProfile(data);  // intial khali , when data set it .
    
       }
       catch(error){
        console.log(error);
       }
    
       
    }
    // need to call this func.  -> direct call ? ->
    useEffect( ()=>{                           // |
        generateProfile(10)           // if kept normal -> infinte loops.
    } , []) 
                // => empty bcz ek hi bar krna hai
   

    // ques  why dont use useCallback -> can use it but ->  ham ek hi bar render kr rhe .
   
   
    return (
        <div>
           <input type="text" className="inp" placeholder="Enter count" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>

            {/* any typed no.  -> entering no ->  ka control is with DOM
            
             i need control of this with react ->  use of state variables ? 

                use of value attribute
              
            */}
           
           
           <button className="btn" onClick={()=>generateProfile(Number(numberofProfile))}>Generate Profiles</button>
        
        <div className="profile">

          {/* {} bcz js  */}

         {
                profile.map( (value)=>{
                    return(
                        <div key={value.id} className="cards">
                               
                    <img src={value.avatar_url}></img>
                    <h2>{value.login}</h2>
                    <a href={value.html_url} target="_blank">Profile</a>
                        </div>
                    )
                })

         }
        </div>
        </div>
    )
}

export default Body;
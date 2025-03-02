import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";




// github apis used 

// https://api.github.com/users?per_page=${count}           will give formm 1 
// https://api.githhub.com/users/taylortwell
// https://api.github.com/users?since=6000&per_page=20      will give from 6000  ->can also make it random


function Main(){
    return (
        <>

        <Header/>
        <Body/>
        </>
    )
}







const root = ReactDOM.createRoot( document.getElementById("root"));
root.render( <Main/>);
import React from "react";
import { Link, Outlet } from "react-router";

export default function Details(){

    return (
        <>
        
        <nav>

            <Link to="/Details">Details</Link>
            <Link to="Hi">Hi</Link>
            <Link to="Hello">Hello</Link>
        </nav>
        <h1>Details page</h1>
        <Outlet></Outlet>
        </>
    )
};
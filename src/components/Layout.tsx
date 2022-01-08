import React from "react";

import { Outlet } from "react-router";
import { NavBar } from "./NavBar/NavBar";

export function Layout(){
   
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
        </div>
    )
}
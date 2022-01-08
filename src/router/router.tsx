import React from "react";
import {Routes, Route} from "react-router-dom"

import { Layout } from "components/Layout";

//PAGES
import { App } from "pages/App";
import { Menu } from "pages/Menu";
import { MyData } from "pages/MyData";
import { MyPets } from "pages/MyPets";
import { ReportLost } from "pages/ReportLost";
import { Email } from "pages/Email";
import { Password } from "pages/Password";
import { EditPet } from "pages/EditPet";


function AppRoutes(){
    return (
        <Routes>
            <Route path="menu" element={<Menu/>}/>             
            <Route path="/" element={<Layout/>}>
                <Route index element={<App/>}/>
                <Route path="myData/:email/:id" element={<MyData/>}/>
                <Route path="data" element={<MyData/>}/>
                <Route path="myData" element={<MyData/>}/>
                <Route path="editPet/:lng/:lat/:id" element={<EditPet/>}/>
                <Route path="email" element={<Email/>}/>
                <Route path="email/to/:direction" element={<Email/>}/>  
                <Route path="password/:email" element={<Password/>}/>
                <Route path="pets" element={<MyPets/>}/>
                <Route path="report" element={<ReportLost/>}/>   
            </Route>
        </Routes>
    )
}

export {AppRoutes}
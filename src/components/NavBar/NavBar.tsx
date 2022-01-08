import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./NavBar.css";


export function NavBar(){

    const navigate = useNavigate()
    const footPrint =  require("./../../img/footprint.svg").default;
    const burger = require("./../../img/burger.svg")
    function clickHandler(e:React.MouseEvent){
        e.preventDefault();
        navigate("/menu")
    }
    function footPrintHandler(e:React.MouseEvent){
        e.preventDefault();
        navigate("/")
    }
    return (
        <div className={css.root}>
            <div>      
                <img onClick={footPrintHandler} className={css.footPrint} src= {footPrint} alt="" />
            </div>
            <div>
                <img onClick={clickHandler} className={css.burguer} src= {burger} alt="" />
            </div>
        </div>

    )
}
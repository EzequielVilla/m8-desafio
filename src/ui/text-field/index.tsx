import React from "react";
import css from "./index.css";

interface FieldProp{
    type:string,
    name:string,
    className?:string,
    
}


export function MyTextField(prop:FieldProp) {
    return (
        <input type={prop.type} name={prop.name} className={css.root}></input>
    )
}
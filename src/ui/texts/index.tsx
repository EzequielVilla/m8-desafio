import React from "react";
import css from "./index.css"

interface TextProp{
    children: React.ReactNode,
    className?: string,
    onClick?:(any?)=>any,
    id?:string,
    itemID?:string,
}

export function Title(props:TextProp):JSX.Element{
    return (
        <div className={css.title}>
            <h1 className={props.className}>{props.children}</h1>
        </div>
    )
}

export function SubTitleBold(props:TextProp):JSX.Element{
    return (
        <div className={css.subtitleBold}>
            <h2 onClick={props.onClick} className={props.className} id={props.id}>{props.children}</h2>
        </div>
        )  
}
export function SubTitle(props:TextProp):JSX.Element{
    return (
        <div className={css.subtitle}>
            <h2 className={props.className}>{props.children}</h2>
        </div>
    )
    
}
export function Text(props:TextProp):JSX.Element{
    return (
        <div className={css.text}>
            <p className={props.className}>{props.children}</p>
        </div>
    )
    
}
export function TextBold(props:TextProp):JSX.Element{
    return (
        <div className={css.textBold}>
            <p className={props.className}>{props.children}</p>
        </div>
    )
 
}

export function Caption(props:TextProp):JSX.Element{
    return (
        <div className={css.caption}>
            <p id={props.id} className={props.className} onClick={props.onClick} itemID={props.itemID}>{props.children}</p>
        </div>
    )
}
import React from "react";
import css from "./index.css";

interface ButtonProps {
    className: string;
    id?: string;
    children?: React.ReactNode;
    onClick?: (any?) => any;
}

export function GreyButton(prop: ButtonProps) {
    return (
        <div className={css.greyButton}>
            <button
                onClick={prop.onClick}
                id={prop.id}
                className={prop.className}
            >
                {prop.children}
            </button>
        </div>
    );
}

export function GreenButton(prop: ButtonProps) {
    return (
        <div className={css.greenButton}>
            <button
                onClick={prop.onClick}
                id={prop.id}
                className={prop.className}
            >
                {prop.children}
            </button>
        </div>
    );
}
export function PinkButton(prop: ButtonProps) {
    return (
        <div className={css.pinkButton}>
            <button
                onClick={prop.onClick}
                id={prop.id}
                className={prop.className}
            >
                {prop.children}
            </button>
        </div>
    );
}

export function WaitingPinkButton(prop: ButtonProps) {
    return (
        <div className={css.pinkButton}>
            <button id={prop.id} className={prop.className}>
                {prop.children}
            </button>
        </div>
    );
}

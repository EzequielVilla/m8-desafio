import React from "react";
import { useNavigate } from "react-router-dom";
import { GreyButton } from "ui/buttons";
import css from "./LoginButton.css";

export function LoginButton() {
    const navigate = useNavigate();
    function clickHandler(e: React.MouseEvent) {
        e.preventDefault();
        navigate("/email");
    }

    return (
        <div className={css.container}>
            <GreyButton
                className={css.email}
                onClick={(e) => clickHandler(e)}
                id="email"
            >
                Log-In
            </GreyButton>
        </div>
    );
}

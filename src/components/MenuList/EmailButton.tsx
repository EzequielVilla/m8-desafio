import React, { useState } from "react";
//HOOKS
import {
    useGetEmail,
    useGetToken,
    useSetEmail,
    useSetToken,
} from "hooks/logIn";
//UI
import { GreenButton } from "ui/buttons";
//CSSS
import css from "./EmailButton.css";

export function EmailButton() {
    //GETTERS
    const email = useGetEmail();
    const token = useGetToken();
    //STATES
    const [sessionEmail, setSessionEmail] = useState(email);
    const [userToken, setUserToken] = useState({ token, logged: true });
    //SETTERS
    useSetToken(userToken.token, userToken.logged);
    useSetEmail(sessionEmail);

    function clickHandler(e: React.MouseEvent) {
        e.preventDefault();
        setSessionEmail("");
        setUserToken({ token: "", logged: false });
    }

    return (
        <div className={css.container}>
            <div>{email}</div>
            <GreenButton className={css.email} onClick={(e) => clickHandler(e)}>
                Cerrar sesion
            </GreenButton>
        </div>
    );
}

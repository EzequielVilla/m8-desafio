import React, { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//COMPONENTS
import { AnimationButton } from "components/AnimationButton/AnimationButton";
//HOOKS
import {
    useGetDirection,
    useGetToken,
    useSetEmail,
    useSetToken,
} from "hooks/logIn";
//LIB
import { checkPassword } from "lib/api";
//UI
import { PinkButton } from "ui/buttons";
import { MyTextField } from "ui/text-field";
import { Title, Caption } from "ui/texts";
//CSS
import css from "./EnterPassword.css";

export function EnterPassword() {
    const [button, setButton] = useState(false);
    const [userToken, setUserToken] = useState({ token: "", logged: false });
    //GET
    const navigate = useNavigate();
    const { email } = useParams();
    const direction = useGetDirection();
    //SET
    useSetToken(userToken.token, userToken.logged);
    useSetEmail(email);
    //
    async function clickHandler(e: FormEvent) {
        e.preventDefault();
        setButton(true);
        const password = e.target["password"].value;
        const resApi = await checkPassword(email, password);
        if (resApi.exist) {
            setUserToken({
                token: resApi.token,
                logged: true,
            });
            direction ? navigate(`/${direction}`) : navigate("/");
        } else {
            alert("Contraseña incorrecta");
            window.location.reload();
        }
    }
    return (
        <form className={css.container} onSubmit={(e) => clickHandler(e)}>
            <div className={css.container}>
                <Title>Ingresar</Title>
                <Caption>Contraseña</Caption>
                <MyTextField type={"password"} name={"password"}></MyTextField>
                <div>
                    {button ? (
                        <PinkButton className={css.button}>
                            <AnimationButton></AnimationButton>
                        </PinkButton>
                    ) : (
                        <PinkButton className={css.button}>
                            Siguiente
                        </PinkButton>
                    )}
                </div>
            </div>
        </form>
    );
}

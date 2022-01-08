import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//COMPONENTS
import { AnimationButton } from "components/AnimationButton/AnimationButton";
//HOOKS
import {
    useSetEmail,
    useSetToken,
    useGetDirection,
    useGetToken,
} from "hooks/logIn";
//LIB
import { createAuthAndToken, updateUserData } from "lib/api";
//UI
import { PinkButton } from "ui/buttons";
import { MyTextField } from "ui/text-field";
import { Caption, Title } from "ui/texts";
//CSS
import css from "./EnterData.css";

export function EnterData() {
    let user: myEmailId;
    let direction: string;
    const [button, setButton] = useState(false);
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const newUser = useParams();
    const paramNoEmpty = Object.entries(newUser).length != 0;

    if (paramNoEmpty) {
        const { email } = newUser;
        const id = parseInt(newUser.id);
        user = { email, id };
        //save the email to re-use it in the menu.
        useSetEmail(email);
        //save the token for authenticate user.
        useSetToken(token);
        direction = useGetDirection();
    }
    // if there is no params the page is used for update the user data, no for create new user.
    else {
        const userToken = useGetToken();
        useEffect(() => {
            setToken(userToken);
        }, [userToken]);
    }

    async function clickHandler(e: FormEvent): Promise<void> {
        e.preventDefault();
        setButton(true);
        const firstName = e.target["nameField"].value;
        const password = e.target["firstPass"].value;
        const password2 = e.target["secondPass"].value;
        const samePass = password === password2;
        if (samePass && paramNoEmpty) {
            const dataApi = await createAuthAndToken(firstName, password, user);
            setToken(dataApi.token);
        } else if (samePass && !paramNoEmpty) {
            await updateUserData(firstName, password, token);
            navigate("/");
        }

        if (samePass && direction) navigate(`/${direction}`);
        else if (samePass && !direction) navigate("/");
    }

    return (
        <form
            className={css.container}
            action=""
            onSubmit={(e) => clickHandler(e)}
        >
            <Title>Mis datos</Title>
            <Caption>NOMBRE</Caption>
            <div className={css.input}>
                <MyTextField type="text" name={"nameField"}></MyTextField>
            </div>
            <Caption>CONTRASEÑA</Caption>
            <div className={css.input}>
                <MyTextField type="password" name={"firstPass"}></MyTextField>
            </div>
            <Caption>REPETIR CONTRASEÑA</Caption>
            <div className={css.input}>
                <MyTextField type="password" name={"secondPass"}></MyTextField>
            </div>
            <div>
                {button ? (
                    <PinkButton className={css.button}>
                        <AnimationButton></AnimationButton>
                    </PinkButton>
                ) : (
                    <PinkButton className={css.button}>Siguiente</PinkButton>
                )}
            </div>
        </form>
    );
}

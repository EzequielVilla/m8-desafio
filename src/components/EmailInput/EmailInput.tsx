import React, { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//Components
import { AnimationButton } from "components/AnimationButton/AnimationButton";
//HOOKS
import { useSetDirection } from "hooks/logIn";
//LIB
import { createOrFindUser } from "lib/api";
//UI
import { PinkButton } from "ui/buttons";
import { MyTextField } from "ui/text-field";
import { Caption, Title } from "ui/texts";
//CSS
import css from "./EmailInput.css";

export function EmailInput() {
    const navigate = useNavigate();
    const { direction } = useParams();
    const [button, setButton] = useState(false);

    //set direction in atom to re-direct user to the page clicked.
    useSetDirection(direction);

    async function clickHandler(e: FormEvent) {
        e.preventDefault();
        setButton(true);
        const newEmail = e.target["email"].value;
        const exist = await createOrFindUser(newEmail);
        if (exist.created) {
            const id = exist.newUser.id;
            navigate(`/myData/${newEmail}/${id}`);
        } else navigate(`/password/${newEmail}`);
    }

    return (
        <form onSubmit={(e) => clickHandler(e)}>
            <div className={css.container}>
                <Title>Ingresar</Title>
                <Caption>Email</Caption>
                <MyTextField type={"email"} name={"email"}></MyTextField>
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

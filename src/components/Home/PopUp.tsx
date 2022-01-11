import React from "react";
//LIB
import { sendReport } from "lib/api";
//UI
import { GreenButton } from "ui/buttons";
import { MyTextField } from "ui/text-field";
import { Caption } from "ui/texts";
//CSS
import css from "./PopUp.css";

export function PopUp(props: PopUpData) {
    const close = require("./../../img/vector.svg");

    function closeHandler(e: React.MouseEvent) {
        e.preventDefault();
        props.data.setPopUp(false);
    }
    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        const firstName = e.target["name"].value;
        const phone = e.target["phone"].value;
        const location = e.target["location"].value;
        const { userId, petName } = props.data;
        const data = { userId, petName, firstName, phone, location };
        await sendReport(data);
        alert("Reporte enviado");
        props.data.setPopUp(false);
    }
    return (
        <div className={css["popup-container"]}>
            <img className={css.close} onClick={closeHandler} src={close} />
            <form
                className={css["input-form-container"]}
                onSubmit={submitHandler}
            >
                <h1>Reportar cardInfo de {props.data.petName}</h1>
                <Caption>TU NOMBRE</Caption>
                <MyTextField
                    type={""}
                    name={"name"}
                    className={css.myname}
                ></MyTextField>
                <Caption>TU TELÉFONO</Caption>
                <MyTextField
                    type={""}
                    name={"phone"}
                    className={css.phone}
                ></MyTextField>
                <Caption>DONDE LO VISTE?</Caption>
                <MyTextField
                    type={""}
                    name={"location"}
                    className={css["find-cardInfo"]}
                ></MyTextField>
                <div className={css["send-cardInfo"]}>
                    <GreenButton className={""}>Enviar</GreenButton>
                </div>
            </form>
        </div>
    );
}

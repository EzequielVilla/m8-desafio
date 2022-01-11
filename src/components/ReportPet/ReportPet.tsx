import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
//HOOKS
import { useGetToken } from "hooks/logIn";
//LIB
import { uploadMissedPet } from "lib/api";
import { setCoordinates } from "lib/mapbox/setCoordinates";
//COMPONENTS
import { AnimationButton } from "components/AnimationButton/AnimationButton";
//UI
import { GreenButton, GreyButton, PinkButton } from "ui/buttons";
import { MyTextField } from "ui/text-field";
import { Caption, Title } from "ui/texts";
//CSS
import css from "./ReportPet.css";

export function ReportPet() {
    const defaultImage = require("./../../img/default.svg").default;
    const navigate = useNavigate();
    const token = useGetToken();
    //STATES
    const [button, setButton] = useState(false);
    const [photo, setPhoto] = useState([] as any);

    const [getRootProps, getInputProps] = dropzoneFileManager();
    //Imagen source.
    const dropImage = photo?.preview ? photo.preview : defaultImage;

    function dropzoneFileManager(): [any, any] {
        const { getRootProps, getInputProps } = useDropzone({
            accept: "image/*",
            maxSize: 20000000,
            onDrop: (acceptedFiles) => {
                const img = acceptedFiles[0];
                //save the photo as a data64 file.
                const reader = new FileReader();
                reader.onload = (event) => {
                    setPhoto(
                        Object.assign(img, {
                            preview: event.target.result,
                        })
                    );
                };
                reader.readAsDataURL(acceptedFiles[0]);
            },
        });
        return [getRootProps, getInputProps];
    }

    //buttonsHandlers
    async function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        setButton(true);
        const { lat, lng, location } = await setCoordinates(e);
        const name = e.target["pet-name"].value;
        const data = {
            name,
            photo: photo.preview,
            lat,
            lng,
            location,
        };
        await uploadMissedPet(data, token);
        alert("Mascota reportada");
        navigate("/");
    }
    function cancelClick(e: React.MouseEvent) {
        e.preventDefault();
        navigate("/");
    }
    return (
        <form onSubmit={submitHandler} className={css.container}>
            <Title>Reportar mascota perdida</Title>
            <Caption className="name-comp">Nombre</Caption>
            <MyTextField type={"text"} name={"pet-name"}></MyTextField>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <img className={css.image} src={dropImage} />
                <div className={css.button}>
                    <GreenButton className={css["save-image"]}>
                        Agregar/modificar foto
                    </GreenButton>
                </div>
            </div>
            <MyTextField type={"text"} name={"search"}></MyTextField>
            <Caption>
                Escribí un punto de referencia para reportar a tu mascota. Puede
                ser una dirección, un barrio o una ciudad.
            </Caption>
            <div className={css.button}>
                {button ? (
                    <PinkButton className={""}>
                        <AnimationButton></AnimationButton>
                    </PinkButton>
                ) : (
                    <PinkButton className={""}>Reportar</PinkButton>
                )}
            </div>
            <div className={css.button}>
                <GreyButton onClick={cancelClick} className={css.cancel}>
                    Cancelar
                </GreyButton>
            </div>
        </form>
    );
}

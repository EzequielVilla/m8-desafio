import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate, useParams } from "react-router-dom";
//HOOKS
import { useGetPhoto, useGetToken } from "hooks/logIn";
//LIB
import { deletePet, updateMissedPet } from "lib/api";
import { setCoordinates } from "lib/mapbox/setCoordinates";
//Components
import { AnimationButton } from "components/AnimationButton/AnimationButton";
//UI
import { GreenButton, PinkButton } from "ui/buttons";
import { MyTextField } from "ui/text-field";
import { Caption, Title } from "ui/texts";
//CSS
import css from "./EditUserPet.css";
//MAP
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const Map = ReactMapboxGl({
    accessToken:
        "pk.eyJ1IjoiZXplcXVpZWw5MyIsImEiOiJja3U0aTAyc2gwaGg1MnBvNmhyemJzbDc2In0.VfvIXjWgL8_dqs1ZKlQorA",
});
//
export function EditUserPet() {
    const { id, lat, lng } = useParams();
    const [button, setButton] = useState(false);
    const { latNumber, lngNumber, imagen, navigate, token } = getConstants();

    const [photo, setPhoto] = useState([] as any);
    const [getRootProps, getInputProps] = dropzoneFileManager();

    function getConstants() {
        const latNumber = parseFloat(lat);
        const lngNumber = parseFloat(lng);
        const petPhoto = useGetPhoto();
        const navigate = useNavigate();
        const token = useGetToken();
        const imagen = photo?.preview ? photo.preview : petPhoto;
        return { latNumber, lngNumber, imagen, navigate, token };
    }
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

    async function submitSaveHandler(e: React.FormEvent) {
        e.preventDefault();
        setButton(true);
        const { lat, lng, location } = await setCoordinates(e);
        const name = e.target["nameField"].value;

        const data = {
            name,
            photo: photo.preview,
            lat,
            lng,
            location,
        };
        updateMissedPet(data, id, token);
        navigate("/");
    }

    function findedButtonHandler(e: React.MouseEvent) {
        e.preventDefault();
        const idNumber = parseInt(id);
        deletePet(idNumber, token);
        navigate("/");
    }

    return (
        <form className={css.container} onSubmit={submitSaveHandler}>
            <Title>Reportar mascota perdida</Title>
            <Caption>Nombre</Caption>
            <MyTextField
                className="name"
                type={"text"}
                name={"nameField"}
            ></MyTextField>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <img className={css.image} src={imagen} />
                <div className={css.button}>
                    <GreenButton className={css["save-image"]}>
                        Agregar/modificar foto
                    </GreenButton>
                </div>
            </div>
            <Caption>
                El siguiente mapa muestra dónde se reportó perdida
            </Caption>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{ height: "350px", width: "350px" }}
                center={[lngNumber, latNumber]}
                zoom={[13]}
            >
                <Layer
                    Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}
                ></Layer>
                <Marker coordinates={[latNumber, lngNumber]} />
            </Map>

            <MyTextField
                className="search"
                type="search"
                name={"search"}
            ></MyTextField>
            <Caption>
                Escribí un punto de referencia para reportar a tu mascota. Puede
                ser una dirección, un barrio o una ciudad
            </Caption>
            <div className={css.button}>
                {button ? (
                    <PinkButton className={""}>
                        <AnimationButton></AnimationButton>
                    </PinkButton>
                ) : (
                    <PinkButton className={""}>Guardar</PinkButton>
                )}
            </div>
            <div className={css.button}>
                <GreenButton onClick={findedButtonHandler} className="">
                    Reportar como encontrado
                </GreenButton>
            </div>
        </form>
    );
}

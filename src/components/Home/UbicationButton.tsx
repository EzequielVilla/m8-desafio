import React, { useState } from "react";
//COMPONENTS
import { AnimationButton } from "components/AnimationButton/AnimationButton";
//HOOKS
import { useGetToken } from "hooks/logIn";
//LIB
import { findNearMissedPets } from "lib/api";
//UI
import { PinkButton } from "ui/buttons";
import { Text } from "ui/texts";
//CSS
import css from "./UbicationButton.css";
//INTERNAL INTERFACE
interface myOnClick {
    ubicationHandler: (any: Card) => void;
}

export function UbicationButton(props: myOnClick) {
    const [button, setButton] = useState(false);
    const token = useGetToken();

    function buttonHandler(e: React.MouseEvent): void {
        e.preventDefault();
        setButton(true);
        navigator.geolocation.getCurrentPosition(async (data) => {
            const lat = data.coords.latitude;
            const lng = data.coords.longitude;

            const cardInfo = await findNearMissedPets(lat, lng, token);

            if (!cardInfo[0]) alert("No hay mascotas perdidas cerca");
            props.ubicationHandler(cardInfo);
        });
    }

    return (
        <div className={css.container}>
            <Text className={css.text}>
                Para ver las mascotas reportadas cerca tuyo necesitamos permiso
                para conocer tu ubicación.
            </Text>
            <div>
                {button ? (
                    <PinkButton className={css.button}>
                        <AnimationButton></AnimationButton>
                    </PinkButton>
                ) : (
                    <PinkButton className={css.button} onClick={buttonHandler}>
                        Dar mi ubicación
                    </PinkButton>
                )}
            </div>
        </div>
    );
}

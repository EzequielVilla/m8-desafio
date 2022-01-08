import React from "react";
import { Title } from "ui/texts";
import { CardsOrNoMissed } from "./CardsOrNoMissed";
import css from "./UserMissedPets.css";

export function UserMissedPets() {
    return (
        <div className={css.container}>
            <Title>Mis mascotas reportadas</Title>

            <CardsOrNoMissed></CardsOrNoMissed>
        </div>
    );
}

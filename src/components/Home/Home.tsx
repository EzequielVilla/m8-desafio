import React from "react";

import { Title } from "ui/texts";

import { CardOrButton } from "./CardOrButton";
import css from "./Home.css";

export function Home() {
    return (
        <div className={css.container}>
            <Title>Mascotas perdidas cerca tuyo</Title>
            <CardOrButton />
        </div>
    );
}

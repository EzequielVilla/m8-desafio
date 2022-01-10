import { API_BASE_URL } from "lib/apiUrl";
import React from "react";

import { Title } from "ui/texts";

import { CardOrButton } from "./CardOrButton";
import css from "./Home.css";

export function Home() {
    console.log(API_BASE_URL);

    return (
        <div className={css.container}>
            <Title>Mascotas perdidas cerca tuyo</Title>
            <CardOrButton />
        </div>
    );
}

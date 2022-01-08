import React, { useState } from "react";
import { Card } from "./Card";
import { UbicationButton } from "./UbicationButton";

export function CardOrButton() {
    const [cards, setCards] = useState([] as any);
    async function buttonHandler(data: Card) {
        setCards(data);
    }

    return cards[0] ? (
        <Card cards={cards} />
    ) : (
        <UbicationButton ubicationHandler={(data) => buttonHandler(data)} />
    );
}

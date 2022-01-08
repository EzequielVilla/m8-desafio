import React from "react";
import { useGetUserMissedReported } from "hooks/logIn";
import { MissedCards } from "./MissedCards";
import { NoMissed } from "./NoMissed";

export function CardsOrNoMissed() {
    const petsData = useGetUserMissedReported();

    return petsData ? (
        <MissedCards cards={petsData}></MissedCards>
    ) : (
        <NoMissed></NoMissed>
    );
}

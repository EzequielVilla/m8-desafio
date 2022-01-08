import React, { useRef, useState } from "react";
import { Title, Caption } from "ui/texts";
import css from "./Card.css";

import { PopUp } from "./PopUp";

export function Card(props: Card) {
    const [popUp, setPopUp] = useState(false);
    const [data, setData] = useState({
        userId: "",
        petName: "",
    });

    function reportClickHandler(e: React.MouseEvent) {
        e.preventDefault();
        const userId = e.currentTarget.attributes["id"].value;
        const petName = e.currentTarget.attributes["itemid"].value;
        setData({ userId, petName });
        setPopUp(true);
    }
    /*Se puede hacer un component CARD y adaptar a la situacion
        (si es para ver los cercanos o mis mascotas perdidas)
    */
    return (
        <div className={css.container}>
            <div>
                {props.cards.map((cardInfo) => (
                    <div className={css.cont} key={cardInfo["id"]}>
                        <div
                            className={css["cont__img"]}
                            id={cardInfo["id"].toString()}
                        >
                            <img
                                src={cardInfo["photo"]}
                                alt=""
                                className={css.photo}
                            />
                        </div>
                        <div className={css.cont__cardInfo}>
                            <div className={css["cont__cardInfo__data"]}>
                                <Title className={css.name}>
                                    {" "}
                                    {cardInfo["name"]}
                                </Title>
                                <Caption className={css.location}>
                                    {" "}
                                    {cardInfo["location"]}
                                </Caption>
                            </div>
                            <div className={css["cont__cardInfo__report"]}>
                                <Caption
                                    onClick={reportClickHandler}
                                    itemID={cardInfo["name"]}
                                    id={cardInfo["userId"].toString()}
                                    className={css["report-new-cardInfo"]}
                                >
                                    REPORTAR INFORMACIÓN
                                </Caption>
                            </div>
                        </div>
                    </div>
                ))}
                {popUp ? (
                    <PopUp
                        data={{
                            setPopUp,
                            userId: data.userId,
                            petName: data.petName,
                        }}
                    />
                ) : null}
            </div>
        </div>
    );
}

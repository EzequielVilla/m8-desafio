import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetPhoto } from "hooks/logIn";
import { Caption, Title } from "ui/texts";
import css from "./MissedCards.css";

interface Data {
    cards: PetsData[];
}

export function MissedCards(props: Data) {
    const navigate = useNavigate();
    const pen = require("./../../img/image 5.svg");
    const [photo, setPhoto] = useState("");
    const [paramData, setParamData] = useState({
        lng: "",
        lat: "",
        id: "",
    });
    useSetPhoto(photo);
    useEffect(() => {
        if (photo) {
            const { lng, lat, id } = paramData;
            navigate(`/editPet/${lng}/${lat}/${id}`);
        }
    }, [photo]);

    function editMissedClickHandler(e: React.MouseEvent) {
        e.preventDefault();
        const lng = e.currentTarget.attributes["data-lng"].value;
        const lat = e.currentTarget.attributes["data-lat"].value;
        const id = e.currentTarget.attributes["id"].value;
        const myPhoto = e.currentTarget.attributes["data-photo"].value;
        setPhoto(myPhoto);
        setParamData({ lng, lat, id });
    }

    return (
        <div className={css.container}>
            {props.cards.map((cardInfo) => (
                <div className={css.cont} key={cardInfo["id"]}>
                    <div
                        className={css["cont__img"]}
                        id={cardInfo["userId"].toString()}
                    >
                        <img
                            src={cardInfo["photo"]}
                            alt=""
                            className={css.photo}
                        />
                    </div>
                    <div className={css.cont__cardInfo}>
                        <div className={css["cont__Info"]}>
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
                            <img
                                className={css.pen}
                                onClick={editMissedClickHandler}
                                src={pen}
                                alt=""
                                id={cardInfo.id.toString()}
                                data-lat={cardInfo.lat}
                                data-lng={cardInfo.lng}
                                data-photo={cardInfo["photo"]}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

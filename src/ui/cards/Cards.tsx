import React from "react";
import { Title, Caption } from "ui/texts";
import css from "./Cards.css"

export function Cards(props:Card){

    function reportClickHandler(e:React.MouseEvent){
        e.preventDefault();
    }

    return(
        <div>
            {                    
                props.cards.map((cardInfo)=>(                    
                    <div className={css.cont} key={cardInfo["id"]}>
                        <div className={css["cont__img"]} id={cardInfo["userId"].toString()}>
                            <img src={cardInfo["photo"]} alt="" className={css.photo}/>
                        </div>
                        <div className={css.cont__cardInfo}>
                            <div className={css["cont__cardInfo__data"]}>
                                <Title className={css.name}> {cardInfo["name"]}</Title>
                                <Caption className={css.location}> {cardInfo["location"]}</Caption>                
                            </div>
                            <div className={css["cont__cardInfo__report"]}>
                                <Caption onClick={reportClickHandler} id={cardInfo["id"].toString()} className={css["report-new-cardInfo"]}>REPORTAR INFORMACIÓN</Caption>
                            </div>
                        </div>              
                    </div>
                            
                ))
                }
        </div>
    )
}
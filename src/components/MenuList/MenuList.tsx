import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetLogin } from "hooks/logIn";
import { LoginOrEmail } from "./LoginOrEmail";
import { SubTitleBold } from "ui/texts";
import css from "./MenuList.css";

export function MenuList() {
    const navigate = useNavigate();
    const logged = useGetLogin();

    //SWITCH
    function clickHandler(e: React.MouseEvent) {
        e.preventDefault();
        const direction = e.currentTarget.getAttribute("id");
        logged ? goTo(direction) : goTo(`email/to/:direction`, direction);
    }
    function goTo(direction: string, selected?: string) {
        switch (direction) {
            case "data":
                navigate("/myData");
                break;
            case "pets":
                navigate("/pets");
                break;
            case "report":
                navigate("/report");
                break;
            case "email":
                navigate("/email");
                break;
            case "email/to/:direction":
                navigate(`/email/to/${selected}`);
                break;
        }
    }

    return (
        <div className={css.menu}>
            <SubTitleBold
                className={css.click}
                onClick={(e) => clickHandler(e)}
                id="data"
            >
                Mis datos
            </SubTitleBold>
            <SubTitleBold
                className={css.click}
                onClick={(e) => clickHandler(e)}
                id="pets"
            >
                Mis mascotas
                <br />
                reportadas
            </SubTitleBold>
            <SubTitleBold
                className={css.click}
                onClick={(e) => clickHandler(e)}
                id="report"
            >
                Reportar
                <br />
                mascota
            </SubTitleBold>
            <LoginOrEmail></LoginOrEmail>
        </div>
    );
}

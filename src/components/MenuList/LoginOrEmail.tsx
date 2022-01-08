import React from "react";
import { useGetLogin } from "hooks/logIn";
import { EmailButton } from "./EmailButton";
import { LoginButton } from "./LoginButton";

export function LoginOrEmail() {
    const logged = useGetLogin();

    return <div>{logged ? <EmailButton /> : <LoginButton />}</div>;
}

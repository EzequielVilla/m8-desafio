import { directionMenu, getUserReports, logInState, petPhoto, tokenInfo } from "atoms";
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"



export function useSetEmail(myEmail:string):void{
    const setEmail = useSetRecoilState(logInState)
    useEffect(()=>{
        setEmail({myEmail});
    },[myEmail])
}



export function useGetEmail():string{
    const email = useRecoilValue(logInState).myEmail;
    return email;
}

export function useSetToken(token:string, logged?:boolean):void{
    const setToken = useSetRecoilState(tokenInfo);
    useEffect(()=>{
        setToken({token, logged})
    },[token]) 
}
export function useGetToken():string{
    return useRecoilValue(tokenInfo).token;
}

export function useSetDirection(direction:string):void{
    
    const setDirection = useSetRecoilState(directionMenu)
    useEffect(()=>{
        setDirection({direction})
    },[direction])
    
}

export function useGetDirection():string{
    return useRecoilValue(directionMenu).direction;
}

export function useGetUserMissedReported(){
    return useRecoilValue(getUserReports);
}

export function useResetToken(){
    useResetRecoilState(tokenInfo)
}

export function useSetPhoto(photo:string){
    const setPhoto = useSetRecoilState(petPhoto);
    useEffect(()=>{
        setPhoto(photo);
    },[photo])

}
export function useGetPhoto(){
    return useRecoilValue(petPhoto);
}

export function useGetLogin(){
    return useRecoilValue(tokenInfo).logged;
}
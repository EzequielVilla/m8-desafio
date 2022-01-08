import { checkPassword, createAuthAndToken, createOrFindUser, getMyReportedPets } from "lib/api";
import {atom,selector} from "recoil"
import {recoilPersist} from "recoil-persist"

const {persistAtom} = recoilPersist({
    key:"recoil-persist",
    storage: localStorage,
})

export const logInState = atom({
    key:"email",
    default: {
        myEmail:"",
    },
    effects_UNSTABLE:[persistAtom]
})

export const tokenInfo = atom({
    key:"token",
    default:{
        token:"",
        logged: false,
    },
    effects_UNSTABLE:[persistAtom]
    
})
export const directionMenu = atom({
    key:"directionMenu",
    default: {
        direction: "",
    }
})
export const petPhoto = atom({
    key:"petPhoto",
    default:"",
    effects_UNSTABLE:[persistAtom]

})




export const getUserReports = selector({
    key:"userReports",
    get: async({get})=>{
        const userToken = get(tokenInfo).token;
        const petsData = await getMyReportedPets(userToken);
        return petsData;
    }
})

//
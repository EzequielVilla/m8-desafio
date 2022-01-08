//response from API to createOrFindUser method

interface myModelUser{
    createdAt: Date,
    email: string,
    id:number,
    updatedAt:Date,
}

interface myEmailCheck{
    created: boolean;
    message?: string;
    newUser?: myModelUser;
}
//
interface myEmailId{
    email: string,
    id:number,
}
//
interface myTokenExist{
    token?:string,
    exist:boolean
}
//
interface AuthToken{
    token:string,
    newAuth: {
        createdAt:Date,
        firstName:string,
        id:number,
        password:string,
        updatedAt:Date,
        userId: null,
        user_id:number
    }
}

//?FOR CARDS
interface Card{
    cards: Array<CardData>
}
interface CardData{
    id:number,
    location: string,
    name:string,
    photo:string,
    userId:number,
}
//?

//?PETS DATA
interface PetsData{
    id?:number,
    name:string,
    photo:string,
    userId?: number,
    location:string,
    lat:string | number,
    lng:string | number,
}
//?

//? PETS COORDINATES 
interface PetsCoordinates{
    lng:number,
    lat:number,
    location:string
}
//?

//?Data for popup in home
interface PopUpData{
    data:{
        setPopUp:any
        userId:string,
        petName:string,
    }
}
//?Data for send report.
interface SendReportData{
    userId: string,
    petName: string,
    firstName: string,
    phone:number,
    location:string,
}

//?



import { useGetToken } from "hooks/logIn";
import { API_BASE_URL } from "./apiUrl";



export async function createOrFindUser  (email:string):Promise<myEmailCheck>{
    
    const resp = await fetch(API_BASE_URL+`/user`,{
        method: "post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
        })
    })
    const data = await resp.json();
    return data;   
}
// Enter if user exist
export async function checkPassword(email:string, password:string):Promise<myTokenExist>{
    
    
    const resp = await fetch(API_BASE_URL+`/${email}/${password}`,{
        method:"get",
    })
    const data = await resp.json();
    
    return data;
}
export async function createAuthAndToken(firstName:string,password:string,user:myEmailId):Promise<AuthToken>{
    const resp = await fetch(API_BASE_URL+`/auth`,{
        method:"post",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            firstName,
            password,
            user,
        })
    })
    const data = await resp.json();
    return data;
}


export async function findNearMissedPets(lat:number,lng:number,token:string):Promise<Card>{
    
    
    const resp = await fetch(API_BASE_URL+`/nearPets/?lat=${lat}&lng=${lng}`,{
        method:"get",
        headers:{
            "Authorization":`bearer ${token}`
        }
    })
    const data = await resp.json();
    return data;
}


export async function updateUserData(firstName:string,password:string, token:string){
    
    
    
    const resp = await fetch (API_BASE_URL+`/myuser`,{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`bearer ${token}`
        },
        body:JSON.stringify({
            name: firstName,
            password,
        })
    })
    const data = await resp.json();
    return data;
}

export async function getMyReportedPets(token:string):Promise<Array<PetsData>>{

    const resp = await fetch(API_BASE_URL+`/mypets`,{
        method:"get",
        headers:{
            "Authorization":`bearer ${token}`
        }
    })
    const data = await resp.json();
    const pets:Array<any> = data.pets;    
    if(pets){
        const petsData = pets.map((item)=>{
            const {id,name,photo,userId,location,lat,lng} = item;
            const data = {id,name,photo,userId,location,lat,lng}
            return data;
        })
        return petsData;
    }
}

export function uploadMissedPet(data:PetsData, token:string):void{
    
    fetch(API_BASE_URL+`/me/pet`,{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `bearer ${token}`
        },
        body: JSON.stringify({
            ...data,
        })
    })

}
export async function sendReport(data):Promise<void>{
    const resp = await fetch(API_BASE_URL+`/report`,{
        method:"post",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(
            data
        )

    })  
}

export async function updateMissedPet(data:PetsData, id:string, token:string):Promise<void>{
    
    fetch(API_BASE_URL+`/pet/${id}`,{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `bearer ${token}`
        },
        body: JSON.stringify({
            ...data,
        })
    })    
}

export async function deletePet(id:number, token:string):Promise<void>{
    await fetch(API_BASE_URL+`/pet/${id}`,{
        method:"delete",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `bearer ${token}`
        },
    })
}
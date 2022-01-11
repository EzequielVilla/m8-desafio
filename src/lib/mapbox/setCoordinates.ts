import {mapboxClient} from "."


export async function setCoordinates(e:React.FormEvent):Promise<PetsCoordinates>
    {
        let lat:number,lng:number;
        const positionData = e.target["search"].value;
        await mapboxClient.geocodeForward(
            positionData,
            {
                country: "ar",
                autocomplete: true,
                language: "es",
            },
            function (err, data, res) {
                lng = (data.features[0].center[0]);
                lat = (data.features[0].center[1]);
            }
        ); 
        return {
            lat,
            lng,
            location:positionData,
        };
    }
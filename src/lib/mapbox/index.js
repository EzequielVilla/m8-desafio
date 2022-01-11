const MAPBOX_TOKEN =
    "pk.eyJ1IjoiZXplcXVpZWw5MyIsImEiOiJja3U0aTAyc2gwaGg1MnBvNmhyemJzbDc2In0.VfvIXjWgL8_dqs1ZKlQorA";
const mapboxClient = new MapboxClient(MAPBOX_TOKEN);
export { mapboxClient };
// const mapboxClient = new MapboxClient({
//     accessToken: process.env.MAPBOX_TOKEN,
// });
// export { mapboxClient };

//in this case require lat and lng for set the center of the map
// export function viewMap(lat, lng) {
// window.map = initMap(lat, lng);
// }

// function initMap(lat, lng) {
//     mapboxgl.accessToken = MAPBOX_TOKEN;

//     const map = new mapboxgl.Map({
//         container: "map",
//         style: "mapbox://styles/mapbox/streets-v11",
//         center: [lng, lat],
//         zoom: 13,
//     });
//     const coordenada = {
//         lat,
//         lng,
//     };
//     const mark = new mapboxgl.Marker().setLngLat(coordenada).addTo(map);
//     return map;
// }

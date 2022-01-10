
const dev = process.env.NODE_ENV === "development";
export let API_BASE_URL=''

console.log(process.env.NODE_ENV,'process cambio2');
console.log(process.env.node_env,'firebase');

console.log(dev);

dev? API_BASE_URL = "http://localhost:3000"
    : API_BASE_URL = "https://dwf-m7-desafio.herokuapp.com";




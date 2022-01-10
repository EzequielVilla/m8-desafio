
const dev = process.env.NODE_ENV === "development";
export let API_BASE_URL=''
console.log(process.env.Node_ENV,'process');

console.log(dev);

dev? API_BASE_URL = "http://localhost:3000"
    : API_BASE_URL = "https://dwf-m7-desafio.herokuapp.com/";




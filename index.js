const axios = require('axios');
const dotenv = require('dotenv').config();

async function main() {
    await axios.post('https://mainnet.infura.io/v3/'+process.env.API_Key,
    {
        "jsonrpc":"2.0",
        "method":"eth_chainId",
        "params":[],
        "id":1
    },
    { 
        headers: {
        'Content-Type': 'application/json'
    }
    }).then(({data}) => console.log(data));
}
main();
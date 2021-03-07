//Consigna: Se necesita informar el precio del bitcoin en peso argentino, considerando el precio de venta oficial
const axios = require('axios');
const {axiosRequest} = require('./utils/axios-utils.js')

const getUSDinARS = async()=>{
    const optionsObject = {
        url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
    }
    const dolarPrice = await axiosRequest(optionsObject);
    const result = dolarPrice.data[0].casa.compra.replace(',', '.')
    return parseFloat(result);
}

const getBitcoinPrize = async()=>{
    const optionsObject = {
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    }
    const bitcoinPrice = await axiosRequest(optionsObject);
    const result = bitcoinPrice.data.bpi.USD.rate_float;
    return result;
}

const getBitcoinInARS = async() => {
    const values = await Promise.all([getUSDinARS(), getBitcoinPrize()]);
    return values[0] * values[1]
}

//Descripcion del BUG: El problema es que no devuelve el resultado, sino que devuelve una promesa, 
//siendo que los await/async estan todos invocados.
console.log(getBitcoinInARS());
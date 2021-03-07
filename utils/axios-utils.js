const axios = require("axios");

const axiosRequest = async ({ url, method = 'get', headers = '', data = '' }) => {
    let response;
    try {
        if (method !== 'get') {
            response = axios.request({
                url,
                method,
                data,
                headers
            }).then((data) => data);
        }
        else {
            response = axios.request({
                url,
                method,
                headers
            }).then((data) => data);
        }
        return response;
    } catch (e) {
        response = {
            status: 400,
            msg: e.message
        };
        return response;
    }
}

module.exports = {
    axiosRequest
}
const axios = require('axios').default;

export default class Service {
    static getSummary() {
        return axios({
            method: 'get',
            url: 'https://api.covid19api.com/summary',
            responseType: 'stream'
        });
    }
}
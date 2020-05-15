const axios = require('axios').default;

export default class Service {
    static getSummary() {
        return axios({
            method: 'get',
            url: 'https://covid19.mathdro.id/api/',
            responseType: 'stream'
        });
    }

    static getDailyReport() {
        return axios({
            method: 'get',
            url: 'https://covid19.mathdro.id/api/daily',
            responseType: 'stream'
        });
    }

    static getSummaryOfIndia(){
        return axios({
            method: 'get',
            url: 'https://covid19.mathdro.id/api/countries/in',
            responseType: 'stream'
        });
    }

    static getStateWiseSummary(){
        return axios({
            method: 'get',
            url: 'https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewise',
            headers:{
                "x-rapidapi-host": "coronavirus-tracker-india-covid-19.p.rapidapi.com",
                "x-rapidapi-key": "4a2e3811aamsh7f7033a3e894965p1627e0jsn07536ca30718",
                "useQueryString": true
            }
        });
    }
}
'use strict';

const superagent = require('superagent');

// localhost:3000/weather?cityname=london
async function weatherhandler(req,res) {
    // https://api.weatherbit.io/v2.0/current?key=7a629fed8600441a8faf6e8dff483ea2&city=london
    const key=process.env.WEATHER_API_KEY;
    const cityname2= req.query.cityname;
    const url = `https://api.weatherbit.io/v2.0/current?key=${key}&city=${cityname2}`;
    let weatherInfo = await superagent.get(url);
    let weatherData=weatherInfo.body.data[0];
    let cityData = new Weather(weatherData);
    res.send(cityData);
}

class Weather {
    constructor(data) {
        this.city=data.city_name;
        this.temp=data.temp;
        this.desc=data.weather.description;
    }
}

module.exports = weatherhandler;
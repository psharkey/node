
const yargs = require('yargs');
const axios = require('axios');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

//console.log(argv);
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find address.');
    }
    
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.forecast.io/forecast/74291f05a396cc9e6bdb416826cd0de2/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios(weatherUrl);
}).then((response) => {
    //console.log(response);
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature} but feels like ${apparentTemperature}.`);
}).catch((e) => {   
    if (e.code === 'ENOTFOUND') {
        console.log(`Unable to connect to API server ${e.host}.`);
    } else {
        console.log(e);
    }
});

//
//geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//    if (errorMessage){
//        console.log(errorMessage);
//    } else {
//        console.log(results.address);
//        
//        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
//            if (errorMessage){
//                console.log(errorMessage);
//            } else {
//                console.log(`It's currently: ${weatherResults.temperature} and feels like: ${weatherResults.apparentTemperature}`);
//            } 
//        });
//    }
//});


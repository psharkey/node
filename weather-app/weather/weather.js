const request = require('request');

var getWeather = (lat, lng, callback) => {
     request({
       url: `https://api.forecast.io/forecast/74291f05a396cc9e6bdb416826cd0de2/${lat},${lng}`,
       json: true
    }, (error, response, body) => {
       if (!error && response.statusCode === 200) {
           callback(undefined, {
               temperature: body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
           });
       } else  {
           callback('Unable to fetch weather.', undefined);
       } 
    });    
}

module.exports = {
 getWeather
};

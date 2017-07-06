var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=953eddfbb633ca1e89ad27e4cf1afb0a&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (err) {
      if (err.data.cod && err.data.message) {
        throw new Error(err.data.message);
      } else {
        return err.data.main.temp;
      }
    }, function (res) {
      throw new Error("Unable to fetch weather for that location");
    });


    // return axios.get(requestUrl)
    //      .then(function(response) {
    //             // console.log(response.data);
    //             if(response.data.cod && response.data.message) {
    //                 throw new Error('Unable to fetch weather');
    //             } else {
    //                 return response.data.main.temp;
    //             }
    //         }).catch(function(error) {
    //             throw new Error("Unable to fetch weather for that location");
    //             // console.log(error.response.data.message);
    //         });
  }
}

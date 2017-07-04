var weather = require('openweather-apis');
var appid = '31cf72e82eb8bb6cb90b4dc74a026b1d';
weather.setLang('en');
weather.setAPPID(appid);
weather.setUnits('metric');

weather.setCity('New York');
var temp = weather.getTemperature(function(err, temp) {
    if (err)
        console.log(err);
    else {
        return temp;
    }
});

while (!temp) {
    console.log('wait');
}
console.log(temp);
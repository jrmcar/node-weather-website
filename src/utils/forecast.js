const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4c47809acc234916220f6a154b12add8/'+ latitude +','+ longitude

    request({ url, json: true}, (error, {body:response}) => {
        if(error){
            callback('Unable to connect to weather service!')
        }else if(response.error){
            callback('Unable to find location')
        }else{
            callback(undefined, response.daily.data[0].summary + ' It is currently ' + response.currently.temperature + ' degrees out. There is a ' + response.currently.precipProbability + '% chance of rain. The temperature high of the day is ' + response.daily.data[0].temperatureHigh + ' degrees. The temperature low of the day is ' + response.daily.data[0].temperatureLow +' degrees.')
        }
    })
}

module.exports = forecast
const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoianJtY2FyIiwiYSI6ImNqdzY2NmRkazBxYXUzem1zazRtN3ZmcHEifQ.WkBW8_99W0CYPqjvdAeprg&limit=1'

    request({ url, json: true}, (error, {body:response}) => {
        if(error){
            callback('Unable to connect to location services!')
        }else if(response.features.length === 0){
            callback('Unable to find location. Try another search.')
        }else{
            callback(undefined, {
                latitude: response.features[0].center[1],
                longitude: response.features[0].center[0],
                location: response.features[0].place_name
            })
        }
    })
}

module.exports = geocode
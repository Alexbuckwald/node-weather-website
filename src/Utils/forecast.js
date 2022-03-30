const request = require('request')

// Include new data
// Update forecast string
// Commit changes
// Push Changes to Github and Deploy
// Test your work in the live application


const forecast = (latitude,longitude, callback) => {
	
	const url = 'http://api.weatherstack.com/current?access_key=6b75565ca4b4f6dc747336b9bf67c234&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
	
	request({url, json:true}, (error, {body}) => {
		if (error){
			callback('Unable to connect to the Weather service!', undefined)
		}else if(body.error){
			callback(body.error.code, body.error.info,undefined)
		}else{
			callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out, it feels like ' + body.current.feelslike+' degrees out' + ' and the humidity is ' + body.current.humidity+ "%")
		}
	}
	)
}


module.exports = forecast
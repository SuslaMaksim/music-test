import axios from 'axios'


export let getData = {
    getWeatherByCityName(cityName,apiKey){
       return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
           .then(response => response.data)
    },
    getCityNameByCoordinates(latitude,longitude,apiKey){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
            .then(response => response.data)
    },
    getWeatherByCoordinates(latitude,longitude,apiKey){
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&lang=ru&exclude=hourly,minutely&appid=${apiKey}`)
            .then(response => response.data)
    }
}


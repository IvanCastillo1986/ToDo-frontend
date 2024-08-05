const apiURL = () => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=40.730610&lon=-73.935242&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
}

module.exports = { apiURL }
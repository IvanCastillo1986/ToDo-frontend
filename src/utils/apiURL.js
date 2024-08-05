const apiURL = (url) => {
    return (

        url === 'weather'
        ?
        `https://api.openweathermap.org/data/2.5/forecast?lat=40.730610&lon=-73.935242&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
        :
        process.env.REACT_APP_TODOS_API_URL
    )
}

module.exports = { apiURL }
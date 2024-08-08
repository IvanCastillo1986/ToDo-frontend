import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import WeatherCard from '../weather_card/WeatherCard'
import './Weather.scss'



export default function Weather() {

    const API = apiURL('weather')
    const [forecast, setForecast] = useState([])

    useEffect(() => {
        axios.get(API)
        .then(res => {
            setForecast(separateDays(res.data.list))
        })
        .catch(err => console.log(err))
    }, [])

    // separate the days and get the low and high temps for each day
    const separateDays = (list) => {
        // NOTE: this function can be adjusted to find low or high of any property.
        // For now, it gives every other property of that day's "21:00:00" date time.
        const fiveDays = []
        let lowTemp = Infinity
        let highTemp = -Infinity

        list.forEach(weatherItem => {
            if (weatherItem.main.temp > highTemp) highTemp = weatherItem.main.temp
            if (weatherItem.main.temp < lowTemp) lowTemp = weatherItem.main.temp

            // if it's the last 3-hour increment of the day, terminate day
            if (weatherItem.dt_txt.split(' ')[1] === "21:00:00") {
                weatherItem.lowHighTemps = {lowTemp, highTemp}
                fiveDays.push(weatherItem)
                lowTemp = Infinity
                highTemp = -Infinity
            }
        })

        return fiveDays
    }


    return (
        <div className='Weather'>
            <h2>Weather</h2>
            <p>New York City</p>

            <div className='Weather__container'>
                {forecast.length > 0 &&
                forecast.map((weatherData) => {
                    return <WeatherCard key={weatherData.dt} weatherData={weatherData} />
                })}
            </div>
        </div>
    )
}

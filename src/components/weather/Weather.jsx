import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'
import WeatherCard from '../weather_card/WeatherCard'
import './Weather.scss'



export default function Weather() {

    const API = apiURL()
    const [forecast, setForecast] = useState([])

    // isolates the forecast for next 5 days in 24 hour increments from latest forecast
    useEffect(() => {
        axios.get(API)
        .then(res => {
            const list = res.data.list
            setForecast([list[0], list[8], list[16], list[24], list[32]])
        })
        .catch(err => console.log(err))
    }, [])

    // Next:  place those into individual <WeatherCard /> components



    return (
        <div className='Weather'>
            <h2>New York City</h2>

            <div className='Weather__container'>

                {forecast.length &&
                forecast.map((weatherData) => {
                    return <WeatherCard key={weatherData.dt} weatherData={weatherData} />
                })}
            </div>
        </div>
    )
}

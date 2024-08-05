import React from 'react'

import './WeatherCard.scss'



export default function WeatherCard({ weatherData }) {


    // console.log(weatherData)


    return (
        <div className='WeatherCard'>
            <span>Temperature: {weatherData.main.temp}</span>
            <span>Pressure: {weatherData.main.pressure}</span>
            <span>Clouds: {weatherData.weather[0].description}</span>
            <span>Wind: {weatherData.wind.deg} degrees at {weatherData.wind.speed} mph</span>
        </div>
    )
}

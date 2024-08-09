import React from 'react'

import './WeatherCard.scss'



export default function WeatherCard({ weatherData, dayOfWeek }) {


    // console.log(weatherData)


    return (
        <div className='WeatherCard'>
            <p>{dayOfWeek}</p>
            <span>Low: {weatherData.lowHighTemps.lowTemp}&deg;</span>
            <span>High: {weatherData.lowHighTemps.highTemp}&deg;</span>
            <span>Pressure: {weatherData.main.pressure}</span>
            <span>Clouds: {weatherData.weather[0].description}</span>
            <span>Wind: {weatherData.wind.deg}&deg; at {weatherData.wind.speed} mph</span>
        </div>
    )
}

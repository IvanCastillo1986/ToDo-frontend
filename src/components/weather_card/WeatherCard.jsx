import React, { useState, useEffect } from 'react'
import './WeatherCard.scss'



export default function WeatherCard({ weatherData, dayOfWeek, windowWidth }) {

    const [showMoreData, setShowMoreData] = useState(true)
    const [showArrow, setShowArrow] = useState(false)
    

    const handleShowMoreData = () => {
        if (windowWidth <= 640) {
            setShowArrow(!showArrow)
            setShowMoreData(!showMoreData)
        }
    }
    
    useEffect(() => {
        if (windowWidth <= 640) {
            setShowArrow(true)
            setShowMoreData(false)
        } else {
            setShowArrow(false)
            setShowMoreData(true)
        }
    }, [windowWidth])


    return (
        <div className='WeatherCard' onClick={handleShowMoreData}>
            <p className='WeatherCard__day-of-week'>{dayOfWeek}</p>
            <div className='WeatherCard__temps'>
                <div>
                    <span>Low</span> <span className='colon'>:&nbsp;</span> <span>{weatherData.lowHighTemps.lowTemp.toString().split('.')[0]}&deg;</span>
                </div>
                <div>
                    <span>High</span> <span className='colon'>:&nbsp;</span> <span>{weatherData.lowHighTemps.highTemp.toString().split('.')[0]}&deg;</span>
                </div>
            </div>

            <div className='WeatherCard__clouds' style={{"display": showMoreData ? "flex" : "none"}}>
                {weatherData.weather[0].description.split(' ').map(word => <span>{word}&nbsp;</span>)}
            </div>
            <div className='WeatherCard__pressure' style={{"display": showMoreData ? "flex" : "none"}}>
                <span>Pressure:&nbsp;</span> <span>{weatherData.main.pressure}</span>
            </div>
            <div className='WeatherCard__winds' style={{"display" : showMoreData ? "flex" : "none"}}>
                <span>Winds {weatherData.wind.deg}&deg;</span> <span>at {weatherData.wind.speed.toString().split('.')[0]} mph</span>
            </div>
            <div className='WeatherCard__arrow' style={{"display" : showArrow ? "block" : "none"}}>&#x25BC;</div>
        </div>
    )
}

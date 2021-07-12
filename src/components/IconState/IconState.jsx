import React from 'react'
import PropTypes from 'prop-types'

import {
    WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiThunderstorm,
    WiRaindrop,
    WiDayFog
} from 'react-icons/wi'

export const validValues = [
    "clouds",
    "clear",
    "rain",
    "snow",
    "drizzle",
    "thunderstorm",
    "mist",
    "haze"
]
const stateByName = {
    clouds : WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    thunderstorm: WiThunderstorm,
    drizzle:WiRaindrop,
    mist: WiDayFog,
    haze: WiDayFog,
}

const IconState = ({state}) => {
    const StateByName=  stateByName[state]
    return (
        <StateByName/>
    )
}

IconState.propTypes = {
    state : PropTypes.oneOf(validValues).isRequired,
}

export default IconState

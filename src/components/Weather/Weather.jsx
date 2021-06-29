import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import {WiCloud,
    WiDayCloudy,
    WiDayFog,
    WiDaySunny,
    WiRain
} from 'react-icons/wi'
import { IconContext } from 'react-icons/lib'

const validValues = [
    "cloudy",
    "cloud",
    "fog",
    "sunny",
    "rain",
]
const stateByName = {
    cloudy : WiDayCloudy,
    cloud: WiCloud,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}

const renderState = state => {
    let Icon=  stateByName[state] // se valida el undefined por medio de proptypes
    return <Icon/>
}
const Weather = ({temperature,state}) => {
    return (
        <>
            <IconContext.Provider value={{size  : "5em"}}>
                {renderState(state) }
            </IconContext.Provider>
            <Typography display="inline" variant="h3">{temperature}</Typography>
        </>
    )
}

Weather.propTypes = {
    temperature : PropTypes.number.isRequired,
    state : PropTypes.oneOf(validValues).isRequired,

}

export default Weather

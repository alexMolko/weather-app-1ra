import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastIem from './../ForecastItem'
import {validValues} from './../IconState'

//Ponemos un id para encontrar cada item
const renderForecastItem = forecast => {
    const {hour,temperature,state,weekDay}= forecast
    return (
        <Grid data-testid ="forecast-item-container" item key={`${weekDay}${hour}`}>
            <ForecastIem 
            weekDay={weekDay} 
            temperature={temperature} 
            hour={hour} 
            state={state}/>
        </Grid>

    )
}

const Forecast = ({forecastItemList}) => {
    return (
        <Grid container
            justify="space-around"
            alignItems="center" >
            {
                forecastItemList.map(forecast => renderForecastItem(forecast))
            }
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.shape({
        weekDay : PropTypes.string.isRequired,
        hour : PropTypes.number.isRequired,
        state : PropTypes.oneOf(validValues).isRequired,
        temperature : PropTypes.number.isRequired,   
    }).isRequired, 
}

export default Forecast

import React from 'react'
import useCityList from '../../hooks/useCityList'
import PropTypes from 'prop-types'
import CityInfo from './../CityInfo'
import Weather from  './../Weather'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Alert from '@material-ui/lab/Alert'
import {getCityCode} from '../../utils/utils'


//renderCityAndCountry se convierte en una función que regresa otra función
const renderCityAndCountry = eventOnClickCity => (cityAndCountry,weather ) => {
    const {city,country,countryCode} = cityAndCountry
    return (
    <ListItem 
    key={getCityCode(city,countryCode)} 
    onClick = {() => eventOnClickCity(city,countryCode)}
    button
    alignItems="center"
    >
            <Grid container
                justify ="center"
                alignItems="center"
            >
                <Grid item
                    md ={9}
                    xs = {12}
                >
                 <CityInfo city={city} country= {country} />
                </Grid>
                <Grid item
                    md ={3}
                    xs = {12}
                >
                    <Weather 
                    temperature={weather && weather.temperature} 
                    state={weather && weather.state}/>

                </Grid>
            </Grid>
    </ListItem>
    )
    
}

const CityList = ({cities, onClickCity,actions,data}) => {
    const {onSetAllWeather} =actions
    const {allWeather} = data
    const {error,setError}= useCityList(cities,allWeather,onSetAllWeather)
    return (
        <div>
            {
                error && <Alert onClose = {() => setError(null) }severity="error">{error}</Alert>
            }
            <List> 
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                        allWeather[getCityCode(cityAndCountry.city,cityAndCountry.countryCode)]))
                }
            </List>
        </div>

    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity :PropTypes.func.isRequired,
}

export default CityList

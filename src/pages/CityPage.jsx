import React, {useMemo} from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'
import useCityPage from '../hooks/useCityPage'
import LinearProgress from '@material-ui/core/LinearProgress'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import {getCountryNameByCode} from '../utils/serviceCities'
import { useWeatherDispatchContext, useWeatherStateContext } from '../WeatherContext'

const CityPage = () => {
    //const {onSetAllWeather,onSetForecast} =actions
    const actions = useWeatherDispatchContext()
    const data= useWeatherStateContext()

    const {allWeather,allForeCast}= data
    const {city, countryCode} = useCityPage(allForeCast,actions)
    const cities = useMemo(() => ([{city, countryCode}]),[city,countryCode])
    
    useCityList(cities,allWeather,actions)

    const cityCode =getCityCode(city,countryCode)

    const weather = allWeather[cityCode]    
    const forecastData =  allForeCast[cityCode]

    const country = getCountryNameByCode(countryCode)
    const state= weather && weather.state
    const temperature=weather && weather.temperature
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind
    return (
        <AppFrame>
            <Paper elevation={3}>
                <Grid container
                justify="space-around"
                direction="column"
                spacing={2}>
                    <Grid item container 
                        xs={12}
                        justify="center"
                        alignItems="flex-end">
                        <CityInfo city= {city} country={country}/>
                    </Grid>
                    <Grid container item xs={12}
                        justify="center">
                            <Weather state= {state} temperature={temperature}/>
                            {
                                humidity && wind &&
                                <WeatherDetails humidity= {humidity} wind={wind}/>
                            }
                            
                    </Grid>
                    <Grid item>
                        {
                            !forecastData && <LinearProgress/>
                        }
                    </Grid>
                    <Grid item xs={8}>
                            {
                                forecastData &&<Forecast forecastItemList= {forecastData}/>
                            }
                    </Grid>
                </Grid>
            </Paper>

        </AppFrame>
        
    )
}

export default CityPage

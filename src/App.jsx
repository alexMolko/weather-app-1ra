import React,{useState, useCallback, useMemo} from 'react'
import {BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    
    const [allWeather, setAllWeather] = useState({})
    const [allForeCast, setAllForeCast] = useState({})
    
    const onSetAllWeather =useCallback ((cityWeather) => {
        
        setAllWeather( allWeather => {
           return ({...allWeather,...cityWeather})
        })
    }, [setAllWeather])
    
    const onSetForecast =useCallback ((forecastData) => {
        
        setAllForeCast( foreCast => {
           return ({...foreCast, ...forecastData})
        })
    }, [setAllForeCast])

    const actions = useMemo (()=> (
        {
            onSetAllWeather,
            onSetForecast
        }
    ), [onSetAllWeather,onSetForecast])
    
    const data = useMemo (()=> (
        {
            allWeather,
            allForeCast
        }
    ), [allWeather,allForeCast])
    return (
        <Router>
            <Switch>
                <Route exact path = "/">
                    <WelcomePage/>
                </Route>
                <Route path = "/main">
                    <MainPage data={data} actions = {actions}/>
                </Route>
                <Route path = "/city/:countryCode/:city">
                    <CityPage data={data} actions = {actions} />
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>   
    )
}

export default App
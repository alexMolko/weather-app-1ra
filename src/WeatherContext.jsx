import React,{useReducer,useContext} from 'react'

const WeatherStateContext = React.createContext()

const WeatherDispatchContext = React.createContext()


const initialValue= {
    allWeather : {},
    allForeCast : {}
}

const reducer =(state,action) => {
    switch (action.type) {
        case 'SET_ALL_WEATHER':
          const  cityWeather= action.payload 
          const newAllWeather = {...state.allWeather,...cityWeather}
          return {...state,allWeather: newAllWeather}
        case 'SET_FORECAST_DATA':
          const  forecastData= action.payload 
          const newAllForecastData = {...state.allForeCast, ...forecastData}
          return {...state, allForeCast :newAllForecastData}
        default:
         return state
    }
}

const WeatherContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value  ={state}>
                {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}

const useWeatherDispatchContext =() => {
    const dispatch = useContext(WeatherDispatchContext)
    if (!dispatch){
        throw Error ("Must set dispatch provider")
    }
    return dispatch
}
const useWeatherStateContext =() => {
    const state = useContext(WeatherStateContext)
    if (!state){
        throw Error ("Must set state provider")
    }
    return state

} 
export {
    useWeatherStateContext,
    useWeatherDispatchContext,
    WeatherContext
}

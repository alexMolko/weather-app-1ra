import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

export const WeatherExample= () => <Weather temperature={10} state= "sunny"/>

export const WeatherExample2= () => <Weather temperature={10} state= "fog"/>
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}
const forecastItemList= [
    {hour: 18, state: "clear", temperature: 17, weekDay: "Lunes"},
    {hour: 8, state: "snow", temperature: 15, weekDay: "Martes"},
    {hour: 13, state: "clouds", temperature: 25, weekDay: "Miércoles"},
]

export const ForecastExample = () => <Forecast forecastItemList={forecastItemList}/>
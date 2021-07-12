import Forecast from './Forecast'
import {render} from '@testing-library/react'

const forecastItemList= [
    {hour: 18, state: "clear", temperature: 17, weekDay: "Lunes"},
    {hour: 8, state: "snow", temperature: 15, weekDay: "Martes"},
    {hour: 13, state: "clouds", temperature: 25, weekDay: "Miércoles"},
]

test ("Forecast render", async () => {
    //const {findByTestId}
    //Consiste en encontrar por id
  
    const {findAllByTestId} =  render (<Forecast 
        forecastItemList={forecastItemList}/>)

    const forecastItem = await findAllByTestId("forecast-item-container")

    expect (forecastItem).toHaveLength(3)
})
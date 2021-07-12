import { expect } from '@jest/globals'
import {render} from '@testing-library/react'
import WeatherDetails from './WeatherDetails'
import '@testing-library/jest-dom/extend-expect';

//findbyText: permite encontrar un componente por el texto
test ("WeatherDetails render", async () => {
    const  {findByText} =   render (<WeatherDetails humidity= {10} wind={15}/>)

    //Al utilizar las barras utilizamos un REGEXP
    const humidity = await findByText(/10/)
    const wind = await findByText(/15/)



    expect(humidity).toHaveTextContent("Humedad: 10%")
    expect(wind).toHaveTextContent("Viento: 15 km/hr")
    
})
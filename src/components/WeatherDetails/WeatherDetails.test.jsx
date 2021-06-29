import { expect } from '@jest/globals'
import {render} from '@testing-library/react'
import WeatherDetails from './WeatherDetails'


//findbyText: permite encontrar un componente por el texto
test ("WeatherDetails render", async () => {
    const  {findbyText} =   render (<WeatherDetails />)

    //Al utilizar las barras utilizamos un REGEXP
    const wind = await findbyText(/10/)



    expect(wind).toHaveTextContent("10")
    
})
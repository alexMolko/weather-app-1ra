import React from 'react'
import CityInfo from './CityInfo'
import {render} from '@testing-library/react'



test("CityInfo render", async () => {
    // AAA 
    //Arrange
    //Action
    const city= "Mexico"
    const country="Mexicos"
    const {findAllByRole} = render(<CityInfo city={city} country={country} />)
    //Assert
    //findAllByRole va a buscar todos los componentes que sean heading -> resultado es un array
    const cityAndCountryComponent = await findAllByRole("heading")
    //¿cuando el test va a er correcto?
    //Definicion
    //primer heading ciudad
    //segundo heading pais

    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)
})
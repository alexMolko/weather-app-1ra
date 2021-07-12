import CityList from './CityList'
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom'

const cities=[
    {city: "Buenos aires", country: "Argentina", countryCode: "AR"},
    {city: "Ciudad de México", country: "México", countryCode: "MX"},
    {city: "Varsovia", country: "Polonia", countryCode: "PL"},
]
test("CityList renders", async() => {
    
    const { findAllByRole } = render (<CityList cities={cities} onClickCity = {() => {} }/>)

    const items= await findAllByRole ("button")

    expect(items).toHaveLength(3);
})

test ("CityList click on item", async () => {
    //Simulamos acción del usurio
    // vamos a utilizar función "mock (función imitadora)"

    const fnClickOnItem = jest.fn()

    const {findAllByRole} =await render (<CityList cities= {cities} onClickCity = {fnClickOnItem}/>)

    const items = await findAllByRole ("button")

    //ahora simulamos la función con fireevent
    //es parte de la librería 

    fireEvent.click(items[0])

    //¿Qué tiene que sucedes?
    // se debió llamar a la función fnClickOnItem una única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
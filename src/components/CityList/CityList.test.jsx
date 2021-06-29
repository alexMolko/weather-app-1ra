import CityList from './CityList'
import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom'

const cities=[
    {city: "Buenos aires", country: "Argentina"},
    {city: "Ciudad de México", country: "México"},
]
test("CityList renders", async() => {
    
    const { findAllByRole } = render (<CityList cities={cities}  />)

    const items= await findAllByRole ("listitem")

    expect(items).toHaveLength(2);
})

test ("CityList click on item", async () => {
    //Simulamos acción del usurio
    // vamos a utilizar función "mock (función imitadora)"

    const fnClickOnItem = jest.fn()

    const {findAllByRole} = render (<CityList cities= {cities} onClickCity = {fnClickOnItem}/>)

    const items = await findAllByRole ("listitem")

    //ahora simulamos la función con fireevent
    //es parte de la librería 

    fireEvent.click(items[0])

    //¿Qué tiene que sucedes?
    // se debió llamar a la función fnClickOnItem una única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
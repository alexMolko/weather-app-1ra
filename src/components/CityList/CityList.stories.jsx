import CityList from './CityList'
import {action} from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities=[
    {city: "Buenos aires", country: "Argentina"},
    {city: "Ciudad de México", country: "México"},
]

export const CityListExample= () => <CityList cities={cities} onClickCity = {action("Click on city")}></CityList>
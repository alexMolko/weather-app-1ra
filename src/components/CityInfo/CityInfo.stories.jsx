import CityInfo from "./CityInfo";
import 'typeface-roboto'

export default {
    title: "CityInfo",
    component: CityInfo
}

export const CityExample = (args) => <CityInfo {...args}></CityInfo>

CityExample.args = {city : "Mexico", country : "México"}
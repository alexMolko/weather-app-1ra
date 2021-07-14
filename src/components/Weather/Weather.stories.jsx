import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

const Template = (args) => <Weather {...args}/>

export const WeatherExample= () => Template.bind({})
WeatherExample.args = {temperature: 10 ,state:  "clouds"}



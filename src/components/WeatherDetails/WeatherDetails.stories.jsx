import WeatherDetails from "./WeatherDetails"

export default {
    title: "WeatherDetails",
    component : WeatherDetails
}

export const WeatherDetailsExample = () => <WeatherDetails humidity={14} wind={25} />

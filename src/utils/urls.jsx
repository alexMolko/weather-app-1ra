const apidid="b89521e78a621768caf7b272f557860e"

export const getWeatherUrl = ({city,countryCode}) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apidid}`

export const getForecastUrl= ({city,countryCode}) =>  `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apidid}`
            
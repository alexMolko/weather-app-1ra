const cities=[
    {city: "Buenos aires", country: "Argentina", countryCode: "AR"},
    {city: "Ciudad de México", country: "México", countryCode: "MX"},
    {city: "Varsovia", country: "Polonia", countryCode: "PL"},
]

export const getCities = () => cities

export const getCountryNameByCode = (countryCode) => cities.filter(
    c => c.countryCode===countryCode
    )[0].country
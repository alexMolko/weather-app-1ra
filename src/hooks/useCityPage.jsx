import {useEffect,useDebugValue} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { getForecastUrl } from '../utils/urls'
import getForecastItem from '../utils/transform/getForecastItem'
import { getCityCode } from '../utils/utils'

const useCityPage = (onSetForecast,allForeCast) => {  
   // const [data, setData] = useState(null)

    const {city, countryCode} =  useParams()
    
    useDebugValue(`useCityPage ${city}`)
    useEffect( () => {
        const getForecast = async () => {
        const url= getForecastUrl ({city, countryCode})
        const cityCode =getCityCode(city,countryCode)
            try
                {
                    const {data} = await axios.get(url)
                    const forecastItemAux = getForecastItem(data)
                    onSetForecast({[cityCode]:forecastItemAux})
                }
            catch (error){
                console.log(error)
            }
        }
        const cityCode =getCityCode(city,countryCode)
        if (allForeCast && !allForeCast[cityCode]) {
            getForecast()
        }

        

    }, [city, countryCode,onSetForecast,allForeCast])

    return  {city, countryCode}
}

export default useCityPage
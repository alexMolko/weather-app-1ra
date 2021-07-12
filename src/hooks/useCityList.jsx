import {useState, useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from '../utils/urls'
import getAllWeather from '../utils/transform/getAllWeather'
import { getCityCode } from '../utils/utils'
const useCityList = (cities,allWeather,onSetAllWeather) => {
    //const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)
    useEffect(() => {
        const setWeather = async (city,countryCode) => {
        const url = getWeatherUrl({city,countryCode})

            try{ 
                const propName = getCityCode(city,countryCode)
                onSetAllWeather({ [propName]:{}})
                const response = await axios.get(url)
                const allWeatherAux =  getAllWeather(response,city,countryCode)
                onSetAllWeather(allWeatherAux)
                //setAllWeather(allWeather => ({...allWeather, ...allWeatherAux}))
            }catch (error) {  
                if (error.response){//errores que nos responde el server
                    setError ("Hay un error en la página por el momento")
                }else if(error.request){//errores que suceden por no llegar al server
                    setError ("Verifique la conexión a Internet")
                }else{//errores que suceden imprevistos
                    setError ("Error al cargar los datos")
                }
            }
        }

        cities.forEach(({city, countryCode}) => {
            if (!allWeather[getCityCode(city,countryCode)]){
                setWeather(city,countryCode)
            }
            
        });
        
    }, [cities,allWeather,onSetAllWeather])

    return {error,setError}
}

export default useCityList
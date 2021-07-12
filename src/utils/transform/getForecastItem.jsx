import moment from 'moment'
import 'moment/locale/es-mx'
import { toCelcius } from '../../utils/utils'
const getForecastItem = (data) => {
    const daysAhead = [0,1,2,3,4,5]
    const days = daysAhead.map(d => moment().add(d, 'd'))
    const interval = [4,8,12,16,20,24]
    const forecasItemListAux = data.list.filter((item,index) => interval.includes(index) )
    .map(item => {
        return({
            hour:moment.unix(item.dt).hour(),
            state:item.weather[0].main.toLowerCase(),
            temperature:toCelcius(item.main.temp),
            weekDay: moment.unix(item.dt).format('dddd')
        })
    })
    
    return forecasItemListAux
}

export default getForecastItem
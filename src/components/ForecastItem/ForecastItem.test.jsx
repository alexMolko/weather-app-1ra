import {render} from '@testing-library/react'
import ForecastItem from './ForecastItem'
import '@testing-library/jest-dom/extend-expect';

test ("Should render ForecastItem", async () => {

    const weekDay="Lunes"
    const temperature=25
    const {findByText} = render(<ForecastItem weekDay={weekDay} temperature={temperature} state="clear" hour={12}/>)

    const weekDayExpect = await findByText("Lunes")
    const temperatureExpect = await findByText("25°")

    expect(weekDayExpect).toHaveTextContent(weekDay)
    expect(temperatureExpect).toHaveTextContent(temperature)
})
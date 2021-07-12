import Weather from './Weather'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'


//TDD
test("Weather render sunny", async () => {
    //AAA Arrange, act, Assert

    const { findByRole } = render (<Weather temperature={10} state="clear" />)

    const temp= await findByRole ("heading")

    expect(temp).toHaveTextContent("10")
})
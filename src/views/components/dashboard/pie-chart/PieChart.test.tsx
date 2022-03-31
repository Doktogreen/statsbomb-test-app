
import React from 'react'
import { shallow } from 'enzyme'
import PieChart from '.'

describe('<BasicPieChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<PieChart width={900} height={400} top={10} right={50} bottom={50} left={50} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})

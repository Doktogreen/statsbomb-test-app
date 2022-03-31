
import React from 'react'
import { shallow } from 'enzyme'
import BarChart from '.'

describe('<BarChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(<BarChart top={10} right={50} bottom={50} left={50} width={600} height={400} fill="tomato" />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})

import React from 'react'
import { mount } from 'enzyme'
import StickyHeader from '../components/StickyHeader'

describe('StickyHeader', () => {
  it('pageYOffset is 0, expect has not a header--scroll class', () => {
    window.pageYOffset = 0

    const refHeader = mount(<StickyHeader pathname='/' />).instance().header

    expect(refHeader.classList['0']).toBeUndefined()
  })

  it('pageYOffset is 100, expect has a header--scroll class', () => {
    window.pageYOffset = 100

    const refHeader = mount(<StickyHeader pathname='/' />).instance().header

    expect(refHeader.classList['0']).toEqual('header--scroll')
  })

  it('pageYOffset 0 to 100', () => {
    window.pageYOffset = 0

    const instance = mount(<StickyHeader pathname='/' />).instance()

    expect(instance.header.classList['0']).toBeUndefined()

    window.pageYOffset = 100

    instance.onSticky()

    expect(instance.header.classList['0']).toEqual('header--scroll')
  })

  it('navbar focus', () => {
    const wrapper = mount(<StickyHeader pathname='/cat' />)

    expect(wrapper.find('.focus').length).toBe(1)
  })
})
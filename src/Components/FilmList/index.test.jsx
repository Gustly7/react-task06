import React, { Component } from 'react'
import FilmList from './index'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('FilmList component test suite', () => {
  test('FilmList snapshot renders correctly', () => {
    const tree = renderer.create(
      <FilmList />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('FilmList div should have "container filmList" classes', () => {
    const wrapper = shallow(
      <FilmList />
    )
    const elem = wrapper.find('div.container.filmList')
    expect(elem.length).toBe(1)
  })
})

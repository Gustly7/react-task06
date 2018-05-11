import React, { Component } from 'react'

class SortType extends Component {
  render () {
    return (
      <div className='SortType'>
        <span className='white-font'>Sort by</span>
        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <label className='btn btn-secondary active'>
            <input name='sortType' id='sortType1' type='radio' value='release' />release date
          </label>
          <label className='btn btn-secondary'>
            <input name='sortType' id='sortType2' type='radio' value='rating' />rating
          </label>
        </div>
      </div>
    )
  }
}

export default SortType

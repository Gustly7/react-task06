import React, { Component } from 'react'

class SearchType extends Component {
  render () {
    return (
      <div className='SearchType'>
        <span className='white-font'>Search by</span>
        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <label className='btn btn-secondary active'>
            <input name='searchType' id='searchType1' type='radio' value='title' />Title
          </label>
          <label className='btn btn-secondary'>
            <input name='searchType' id='searchType2' type='radio' value='genre' />Genre
          </label>
        </div>
      </div>
    )
  }
}

export default SearchType

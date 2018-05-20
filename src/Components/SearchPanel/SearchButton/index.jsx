import React, { Component } from 'react'
import * as filmApi from '../../../api/film-api'
import { connect } from 'react-redux'

class Index extends Component {
  searchByClick () {
    filmApi.searchFilms(this.props.searchString, this.props.searchType)
  }

  render () {
    return (
      <div className='SearchButton'>
        <button id='SearchButton' className='submit btn btn-primary btn-lg' onClick={this.searchByClick.bind(this)}>SEARCH</button>
      </div>
    )
  }
}

function mapStateToProps (store) {
  return {
    searchString: store.filmState.searchString,
    searchType: store.filmState.searchType
  }
}

// export default Index
export default connect(mapStateToProps)(Index)

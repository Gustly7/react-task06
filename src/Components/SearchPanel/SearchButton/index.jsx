import React, { Component } from 'react'

class Index extends Component {
  searchByClick () {
    sessionStorage.searchText = document.getElementById('inputSearch').value
    window.location.reload()
  }

  render () {
    return (
      <div className='SearchButton'>
        <button id='SearchButton' className='submit btn btn-primary btn-lg' onClick={this.searchByClick}>SEARCH</button>
      </div>
    )
  }
}

export default Index

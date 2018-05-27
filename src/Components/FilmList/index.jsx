import React, { Component } from 'react'

import { connect } from 'react-redux'

import * as filmApi from '../../api/film-api'

import Film from '../Film/Film'

class FilmList extends Component {
  componentDidMount () {
    const params = new URLSearchParams(this.props.location.search)
    if (params.get('search') != null) {
      filmApi.searchFilms(params.get('search'), params.get('searchBy'))
    }
  }

  render () {
    return (<div className='container filmList'>

      {this.props.films.data.map(film => {
        return (
          <div key={film.id} className='data-list-item'>
            <div className='details' />
            <Film film={film} />
          </div>
        )
      })}

    </div>)
  }
}

const mapStateToProps = function (store) {
  return {
    films: store.filmState.films
  }
}

export default connect(mapStateToProps)(FilmList)

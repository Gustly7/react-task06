import React, { Component } from 'react'
import Poster from './Poster/index'
import FilmName from './FilmName/index'
import FilmYear from './FilmYear/index'
import FilmGenre from './FilmGenre/index'
import './Film.css'

class Film extends Component {
  render () {
    if (window['sessionStorage'] === undefined) { window['sessionStorage'] = {} }

    if (window['sessionStorage']['searchText'] === undefined) { window['sessionStorage']['searchText'] = ' ' }

    if (window['sessionStorage']['searchText'] === '') {
      throw new Error('Пустой поиск!')
    }
    console.log(this.props.films)
    return (
      <div className='Film'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Poster link={this.props.films.poster_path} />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <FilmName filmName={this.props.films.title} />
            </div>
            <div className='col'>
              <FilmYear filmYear={this.props.films.release_date} />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <FilmGenre filmGenre={this.props.films.genres} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Film

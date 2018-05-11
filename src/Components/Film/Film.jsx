import React, { Component } from 'react'
import Poster from './Poster/index'
import FilmName from './FilmName/index'
import FilmYear from './FilmYear/index'
import FilmGenre from './FilmGenre/index'
import posterImg from '../../Images/Posters/KillBillVol1_poster.jpg'
import './Film.css'

class Film extends Component {
  render () {
    if (window['sessionStorage'] === undefined) { window['sessionStorage'] = {} }

    if (window['sessionStorage']['searchText'] === undefined) { window['sessionStorage']['searchText'] = '' }

    if (window['sessionStorage']['searchText'] === '') {
      throw new Error('Пустой поиск!')
    }
    return (
      <div className='Film'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Poster link={posterImg} />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <FilmName filmName={this.props.filmName} />
            </div>
            <div className='col'>
              <FilmYear filmYear={this.props.filmYear} />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <FilmGenre filmGenre={this.props.filmGenre} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Film

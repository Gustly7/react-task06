import React, { Component } from 'react'
import Film from '../Film/Film'

var films = [
  {filmName: 'Kill Bill vol. 1', filmYear: '2003', filmGenre: 'Action & Adventure', id: 1},
  {filmName: 'Kill Bill vol. 2', filmYear: '2004', filmGenre: 'Action & Adventure', id: 2},
  {filmName: 'Kill Bill vol. 3', filmYear: '2005', filmGenre: 'Action & Adventure', id: 3},
  {filmName: 'Kill Bill vol. 4', filmYear: '2006', filmGenre: 'Action & Adventure', id: 4}
]

class FilmList extends Component {
  render () {
    return (
      <div className='container filmList'>
        {films.map((film, i) => {
          console.log('Entered')
          // Return the element. Also pass key
          return (<Film key={film.id} filmName={film.filmName} filmYear={film.filmYear} filmGenre={film.filmGenre} />)
        })}
      </div>
    )
  }
}

export default FilmList

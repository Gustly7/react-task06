import React, { Component } from 'react'
import FilmList from './Components/FilmList/'
import FilmErrorBoundary from './Components/FilmErrorBoundary'
import MainErrorBoundary from './Components/MainErrorBoundary'
import './App.css'
import SearchPanel from './Components/SearchPanel/SearchPanel'
import Footer from './Components/Footer/index'

class App extends Component {
  render () {
    return (
      <MainErrorBoundary>
        <div className='App'>
          <SearchPanel />
          <FilmErrorBoundary>
            <FilmList />
          </FilmErrorBoundary>
          <Footer />
        </div>
      </MainErrorBoundary>
    )
  }
}

export default App

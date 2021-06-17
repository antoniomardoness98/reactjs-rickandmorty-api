import React, {Fragment} from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './main.sass'
import './components/Header.css'

const App = () => {
  return (
    <Fragment>
      <Header
        title="Rick And Morty API"
      />
      <Characters prueba="test"/>
    </Fragment>
  )
}

export default App

import React from 'react'
import Login from './Login'
import { getFruits } from '../apiClient'

class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    getFruits()
      .then(fruits => {
        this.setState({fruits})
      })
  }

  render () {
    return (
        <Login />

    )
  }
}

export default App

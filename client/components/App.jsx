import React, {Fragment} from 'react'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import TrainingRecord from './TrainingRecord'
import { getFruits } from '../apiClient'
import { HashRouter as Router, Route } from "react-router-dom";


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
      <Router>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/training-record' component={TrainingRecord}/>
      </Router>
    )
  }
}

export default App

import React, {Fragment} from 'react'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import TrainingRecord from './TrainingRecord'
import { getFruits } from '../apiClient'
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux'


class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
  }

  render () {
    return (
      <Router>
        {this.props.isAuthenticated ? 
        
        <Fragment>
          <Route exact path='/' component={Home}/>
          <Route path='/training-record' component={TrainingRecord}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Fragment>
            :
        <Fragment>
            <Route exact path='/' component={Login}/>
            <Route path='/register' component={Register}/>
        </Fragment>
      }
      
      
      </Router>
    )
  }
}

function mapStateToProps(state){
  return{
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(App)
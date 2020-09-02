import React from 'react'
const decode = require('jwt-decode')
import {get,set} from '../utils/localstorage'
import NutritionPyramid from './NutritionPyramid'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hash: '',
      id:null,
      username:''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    const user = decode(get('token'))
    this.setState({id:user.id,username:user.username})
  }

  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e) {
  }

  render () {
    return (
      
      <div className="container vh-100">
        <div className="row my-auto h-100">

          <div className='col'>
            {/* Hakinakina picture */}
            <div className='row'>
              <img src="/utils/Hakinakina-Logo.png" className="img-fluid" alt="Responsive image" />
            </div>
            {/* Welcome, description */}
            <div className='row'>
             <h1>Welcome, {this.state.username}</h1>
             <p>
              On this page you will record any exercise/activity that you participate in during the week, whether it be at Hakinakina, an individual training session on your team trainings, if you are in a team. You may also include PE sessions at school.
              Try to make your entries as detailed as you can and include the intensity of the training.
              If you have any questions please speak to one of the trainers.
             </p>
             <h3 className='text-capitalize'>HAVE FUN, ENJOY AND ACHIEVE!!</h3>
            </div>
            <div className='row'>
              {/* Training record */}
              <div className='col'>
                <h2 className='green'>Training Records</h2>
                <a className='lead' href="/#">+ Add new training session</a>
              </div>
              {/* Nutrition Pyramid */}
              <div className='col'>
                Nutrition Pyramid
                <NutritionPyramid/>
              </div>
            </div>
          </div>
          <div className='col'>
            {/* Warmup */}
            <div className='row'></div>
            {/* Div */}
            <div className='row'></div>
            {/* Stretch */}
            <div className='row'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

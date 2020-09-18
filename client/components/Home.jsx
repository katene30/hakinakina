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
      
      <div className="container-fluid">
        <div className="row row-cols-2 my-auto h-100 mx-1">

          <div className='col pr-3'>
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
             <h3 className='text-uppercase'>HAVE FUN, ENJOY AND ACHIEVE!!</h3>
            </div>
            <div className='row'>
              {/* Training record */}
              <div className='col'>
                <h2 className='light-green'>Training Records</h2>
                <a className='light-green lead' href="#/training-record">+ Add new training session</a>
              </div>
              {/* Nutrition Pyramid */}
              <div className='col'>
                <NutritionPyramid/>
              </div>
            </div>
          </div>
          <div className='col mt-3'>
            {/* Warmup */}
            <div className='row align-items-center workout rounded p-3 m-3'>
              <div className="col">
                <video controls width='450' src="/utils/videos/warmup.mp4"></video>
              </div>
              <div className="col">
                <h4 className="text-uppercase text-light">Warm Up</h4>
                <br/>
                <img src="/utils/pics/warmup.png" alt="warmup" className='workout-icon'/>
              </div>
            </div>
            {/* Div */}
            <div className='row'>
              <hr className="workout-hr"/>
            </div>
            {/* Stretch */}
            <div className='row align-items-center workout rounded p-3 m-3'>
              <div className="col">
                <video controls width='450' src="/utils/videos/stretch.mp4"></video>
              </div>
              <div className="col">
                <h4 className="text-uppercase text-light">Stretch</h4>
                <br/>
                <img src="/utils/pics/stretch.png" alt="stretch" className='workout-icon'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

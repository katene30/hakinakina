import React from 'react'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hash: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {

  }

  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  submit(e) {
  }

  render () {
    return (
      
      <div className="bg container vh-100">
        <div className="row my-auto h-100">

          <div className='col'>
            {/* Hakinakina picture */}
            <div className='row'>
              <img src="../../server/public/utils/Hakinakina-Logo.png" class="img-fluid" alt="Responsive image" />
            </div>
            {/* Welcome, description */}
            <div className='row'>
             <h1>Welcome, NAME</h1>
            </div>
            <div className='row'>
              {/* Training record */}
              <div className='col'></div>
              {/* Nutrition Pyramid */}
              <div className='col'></div>
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

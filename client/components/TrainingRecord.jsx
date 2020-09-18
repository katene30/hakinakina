import React from 'react'


class TrainingRecord extends React.Component {
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
    e.preventDefault()
    let {username, hash} = this.state
  }

  render () {
    return (
      
      <div className="container vh-100">
        {/* Title header */}
        <div className="row">
          <h3 className="text-uppercase">Training Record</h3>
        </div>

        <div className="row">
          {/* New session prompt */}
          <div className="col-2">
            
          </div>

          <div className="col">
            {/* Add new training session */}
            <div className="row"></div>
            {/* Table component */}
            <div className="row"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrainingRecord

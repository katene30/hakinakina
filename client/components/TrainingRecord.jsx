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
    this.props.dispatch(loginUser({username, hash}))
  }

  render () {
    return (
      
      <div className="bg container vh-100">
        <div className="row my-auto h-100 align-items-center justify-content-center">
          THIS Is TrainingRecord
        </div>
      </div>
    )
  }
}

export default TrainingRecord

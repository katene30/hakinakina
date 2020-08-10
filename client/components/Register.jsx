import React from 'react'


class Register extends React.Component {
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
          <div className='row rounded bg-light p-3'>
          <div className="col-2 font-weight-bold rounded text-uppercase bg-secondary text-light rotate p-3 hakinakina">#Hakinakina</div>
          <div className="col">
            
          <form onSubmit={this.submit}>
            <div className="form-group">
              <h2>Sign Up</h2>
              <hr/>

              {/* Error Message
              {this.props.auth.errorMessage && <div className="alert alert-danger">{this.props.auth.errorMessage}</div>} */}
  
              <div className="form-row">
                <div className="col">
                  <label htmlFor="firstName"> First Name </label>
                  <input type="text" className="form-control" id="firstName"/>
                </div>
                <div className="col">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control"  id="lastName"/>
                </div>
              </div>

              <label className="pt-2" htmlFor="inputEmail">Email address</label>
              <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" onChange={this.updateDetails}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" onChange={this.updateDetails}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

          </form>

          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register

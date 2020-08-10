import React from 'react'


class Login extends React.Component {
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
              <h2>Login</h2>
              <hr/>

              {/* Error Message
              {this.props.auth.errorMessage && <div className="alert alert-danger">{this.props.auth.errorMessage}</div>} */}

              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.updateDetails}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.updateDetails}/>
            </div>
            <div className="form-row">
              <div className="col"> <button type="submit" className="btn btn-primary">Submit</button></div>
              <div className="col"> <a href="#"> Forgot your password? </a></div>
            </div>
            <p className="pt-2" style={{marginBottom: "0px"}}>New to Hakinakina? <a href="#">Sign up</a> </p>
          </form>

          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

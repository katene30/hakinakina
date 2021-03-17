import React from 'react'
import {connect} from 'react-redux'
import {login} from '../api/users'
import {loginUser} from '../actions/login.js'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      success:'',
      error:'',
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {

  }

  updateDetails(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  submit(e) {
    e.preventDefault()
    let { username, password } = this.state

    // let user = {
    //   username,
    //   password:password
    // }

    this.props.dispatch(loginUser({username,password}))
    
    // login(user)
    // .then(res => {

    //   this.setState({error:''})
    //   this.setState({success:res.message})
    //   window.location.href = "/";
    // })
    .catch(err => {
      this.setState({message:""})
      this.setState({error:"Your username/password is incorrect"})
    })
  }

  render() {
    return (

      <div className="bg container vh-100">
        <div className="row my-auto h-100 align-items-center justify-content-center">
          <div className='row rounded bg-light p-3'>
            <div className="col-2 font-weight-bold rounded text-uppercase bg-secondary text-light rotate p-3 hakinakina">#Hakinakina</div>
            <div className="col">

              <form onSubmit={this.submit}>
                <div className="form-group">
                  <h2>Login</h2>
                  <hr />

                
              {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
              {this.state.success && <div className="alert alert-success">{this.state.success}</div>}

                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" onChange={this.updateDetails} required />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" onChange={this.updateDetails} required />
                </div>

                <div className="form-row">
                  <div className="col"> <button type="submit" className="btn btn-primary">Submit</button></div>
                {/* STRETCH GOAL
                  <div className="col"> <a href="#"> Forgot your password? </a></div> */}
                </div>

                <p className="pt-2" style={{ marginBottom: "0px" }}>New to Hakinakina? <a href="#/register">Sign up</a> </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Login)

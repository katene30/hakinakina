import React from 'react'
import {createUser} from '../api/users'
import { Link, Redirect } from 'react-router-dom'
import {registerUserRequest} from '../actions/register'
import {connect} from 'react-redux'


class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      firstName:'',
      lastName:'',
      password: '',
      error: '',
      success:''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
  }

  updateDetails(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  submit(e) {
    e.preventDefault()
    let {username,firstName,lastName, password} = this.state

    let user = {
      username,
      firstName,
      lastName,
      password
    }

    this.props.dispatch(registerUserRequest(user))




    // createUser(username,firstName,lastName, password)
    // .then(res => {

    //   this.setState({success:res.message})
    //   window.location.href = "/";
    // })
    // .catch(err=> {
    //   if(err.message == 'Bad Request'){ this.setState({error:'Username is already taken'})}else{
    //     this.setState({error:"Something bad happened and we don't know why"})
    //   }
    // })  
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

            {this.state.error && 
              <div className="alert alert-danger" role="alert">
                  {this.state.error}
              </div>
            }
            {this.state.success && 
              <div className="alert alert-success" role="alert">
                  {this.state.success}
              </div>
            }

              <h2>Sign Up</h2>
              <hr/>

  
              <div className="form-row">
                <div className="col">
                  <label htmlFor="firstName"> First Name </label>
                  <input type="text" className="form-control" id="firstName" onChange={this.updateDetails} required/>
                </div>
                <div className="col">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control"  onChange={this.updateDetails} id="lastName" required/>
                </div>
              </div>

              <label className="pt-2" htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" onChange={this.updateDetails} required/>
              <small id="usernameHelp" className="form-text text-muted">Your username will be used to login, so don't forget your details.</small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" onChange={this.updateDetails} required/>
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

const mapStateToProps = (state) => {
  return{
    auth:state.auth,
    isAuthenticated: state.auth.isAuthenticated
  }
}


export default connect(mapStateToProps)(Register)

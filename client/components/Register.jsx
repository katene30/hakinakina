import React from 'react'
import {createUser} from '../api/users'
import { Link, Redirect } from 'react-router-dom'



class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      firstName:'',
      lastName:'',
      hash: ''
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
    let {username,firstName,lastName, hash} = this.state

    createUser(username,firstName,lastName,hash)
    .then(res => {
      console.log('great successs ',res)
      return <Redirect to="/" />
    })  
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
            </div>

            <div className="form-group">
              <label htmlFor="hash">Password</label>
              <input type="password" className="form-control" id="hash" onChange={this.updateDetails} required/>
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

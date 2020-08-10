import React from 'react'


class Login extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {

  }

  render () {
    return (
        // Standard login centered on page

        // <div className="container vh-100">
        //   <div className="row h-100 align-items-center justify-content-center">
        //     <form className="my-auto rounded bg-light p-3" onSubmit={this.submit}>
        //       <h1 className="h3 mb-3 font-weight-normal text-center">Log In</h1>
        //       <hr />
        //       {/* {this.props.auth.errorMessage && <div className="alert alert-danger">{this.props.auth.errorMessage}</div>} */}
        //       <label htmlFor="inputEmail" className="sr-only">Username</label>
        //         <input className='pt-20' required className="form-control" placeholder="Username" type="text" name="username" onChange={this.updateDetails}/>
        //       <label htmlFor="inputPassword" className="sr-only">Password</label>
        //         <input required className="form-control" placeholder="Password" type="password" name="hash" onChange={this.updateDetails}/>
        //       <input className="btn btn-lg btn-primary btn-block" value='Login' type="submit" disabled={this.props.isAuthenticated ? true : false}/>
        //     </form>
        //   </div>
        // </div>

      <div className="bg container vh-100">
        <div className="row my-auto h-100 align-items-center justify-content-center">
          <div className='row rounded bg-light p-3'>
          <div className="col-2 font-weight-bold rounded text-uppercase bg-secondary text-light rotate p-3 hakinakina">#Hakinakina</div>
          <div className="col">
            
          <form>
            <div class="form-group">
              <h2>Login</h2>
              <hr/>
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-row">
              <div className="col"> <button type="submit" class="btn btn-primary">Submit</button></div>
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

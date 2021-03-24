import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'

import {newLog} from '../actions/logs'
import { getUserTokenInfo } from '../utils/auth'
import {term} from '../utils/term'

class TrainingRecordForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          date:'',
          activity:'',
          length:'',
          intensity:'',
          notes:'',
          hakinakina:'',
          success:'',
          error:'',
          prompt:false
        }
        this.updateDetails = this.updateDetails.bind(this)
        this.submit = this.submit.bind(this)
      }
    
      componentDidMount() {
    
      } 
    
      updateDetails(e) {
        this.setState({[e.target.name]: e.target.value})
        if(e.target.name == 'hakinakina' && e.target.value == 'yes'){
          this.setState({prompt:true})
        }else if(e.target.name == 'hakinakina' && e.target.value == 'no'){
          this.setState({prompt:false})
        }
      }
    
      submit(e) {
        e.preventDefault()
        let {date,activity,length,intensity,notes} = this.state
        let data = getUserTokenInfo()

        let record = {
          userId:data.id,
          date,
          activity,
          length,
          intensity,
          notes
        }
        
        if(this.state.prompt){
          record.activity = 'Hakinakina'
          record.length = 'N/A'
          record.term = term(new Date().getMonth())
        }


        this.props.dispatch(newLog(record))
        .then(() => {
          this.setState({error:''})
          this.setState({success:'Record added'})
          location.reload()
        })
        .catch(() => {
          this.setState({success:""})
          this.setState({error:"Something went wrong!"})
        })




        // ERROR HANDLING
        // newLog(record)
        // .then(res => {
    
        //   this.setState({error:''})
        //   this.setState({success:'Record added'})
        //   // location.reload()
        // })
        // .catch(err => {
        //   this.setState({success:""})
        //   this.setState({error:"Your username/password is incorrect"})
        // })

      }
    render() {
        return (
            <div>
              {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
              {this.state.success && <div className="alert alert-success">{this.state.success}</div>}

            
            <form onSubmit={this.submit}>





              <div className='pb-2'>
                Are you logging a hakinakina session?


                <div onChange={this.updateDetails}>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="hakinakina" id="inlineRadio1" value="yes" required/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="hakinakina" id="inlineRadio2" value="no" />
                    <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                  </div>
                </div>
              </div>


            {this.state.prompt ? 

              <Fragment>
                <div className="form-group row">
                  <label htmlFor="date" className="col col-form-label">Date</label>
                  <div className="col-9">
                    <input name='date' onChange={this.updateDetails} className="form-control" type="date" id="date" required/>
                  </div>
                </div>


              <div className="form-groups">
                  <label htmlFor="form-check">Intensity?</label>
                  <br/>
                  <div className="form-check form-check-inline">
                      <input onClick={this.updateDetails} className="form-check-input" type="radio" name="intensity" id="inlineRadio1" value="low" required/>
                      <label className="form-check-label" htmlFor="inlineRadio1">low</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input onClick={this.updateDetails} className="form-check-input" type="radio" name="intensity" id="inlineRadio2" value="medium" required/>
                      <label className="form-check-label" htmlFor="inlineRadio2">medium</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input onClick={this.updateDetails} className="form-check-input" type="radio" name="intensity" id="inlineRadio3" value="high" required/>
                      <label className="form-check-label" htmlFor="inlineRadio3">high</label>
                  </div>
              </div>
                <div className="form-group mt-2">
                <label htmlFor="notes">What did you do?</label>
                <textarea name='notes' onChange={this.updateDetails} className="form-control" id="notes" rows="3"></textarea>
              </div>


              </Fragment>
          
            :



              <Fragment>

                <div className="form-group row">
                  <label htmlFor="date" className="col col-form-label">Date</label>
                  <div className="col-9">
                    <input name='date' onChange={this.updateDetails} className="form-control" type="date" id="date" required/>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="input">What activity did you do?</label>
                  <input name= 'activity' onChange={this.updateDetails} type="text" className="form-control" id="input" placeholder='e.g Walk up Parihaka' required/>
                </div>

                <div className="form-group">
                  <label htmlFor="input">How long for?</label>
                  <input name='length' onChange={this.updateDetails} type="text" className="form-control" id="input" placeholder='eg. 1hr, 1.8km' required/>
                </div>

              <div className="form-groups">
                  <label htmlFor="form-check">Intensity?</label>
                  <br/>
                  <div className="form-check form-check-inline">
                      <input onClick={this.updateDetails} className="form-check-input" type="radio" name="intensity" id="inlineRadio1" value="low" required/>
                      <label className="form-check-label" htmlFor="inlineRadio1">low</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input onClick={this.updateDetails} className="form-check-input" type="radio" name="intensity" id="inlineRadio2" value="medium" required/>
                      <label className="form-check-label" htmlFor="inlineRadio2">medium</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input onClick={this.updateDetails} className="form-check-input" type="radio" name="intensity" id="inlineRadio3" value="high" required/>
                      <label className="form-check-label" htmlFor="inlineRadio3">high</label>
                  </div>
              </div>

              <div className="form-group mt-2">
                <label htmlFor="notes">Notes</label>
                <textarea name='notes' onChange={this.updateDetails} className="form-control" id="notes" rows="3"></textarea>
              </div>
            </Fragment>
            }


              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    term: state.term,
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(TrainingRecordForm)
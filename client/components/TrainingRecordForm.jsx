import React, { Component } from 'react'
import {newLog} from '../api/logs'
import { getUserTokenInfo } from '../utils/auth'

export default class TrainingRecordForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          date:'',
          activity:'',
          length:'',
          intensity:'',
          notes:'',
          success:'',
          error:''
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
        
        newLog(record)
        .then(res => {
    
          this.setState({error:''})
          this.setState({success:'Record added'})
          location.reload()
        })
        .catch(err => {
          this.setState({success:""})
          this.setState({error:"Your username/password is incorrect"})
        })

      }
    render() {
        return (
            <div>
              {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
              {this.state.success && <div className="alert alert-success">{this.state.success}</div>}

            <form onSubmit={this.submit}>
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


              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            </div>
        )
    }
}

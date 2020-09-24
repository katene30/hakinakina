import React, { Component } from 'react'

export default class TrainingRecordForm extends Component {
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
    render() {
        return (
            <div>
                
            <form>
              <div className="form-group row">
                <label htmlFor="date" className="col col-form-label">Date</label>
                <div className="col-9">
                  <input className="form-control" type="date" id="date" required/>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="input">What activity did you do?</label>
                <input type="text" className="form-control" id="input" required/>
              </div>

              <div className="form-group">
                <label htmlFor="input">How long for?</label>
                <input type="text" className="form-control" id="input" required/>
              </div>

            <div className="form-groups">
                <label htmlFor="form-check">Intensity?</label>
                <br/>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="low" required/>
                    <label className="form-check-label" htmlFor="inlineRadio1">low</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="medium" required/>
                    <label className="form-check-label" htmlFor="inlineRadio2">medium</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="high" required/>
                    <label className="form-check-label" htmlFor="inlineRadio3">high</label>
                </div>
            </div>


              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            </div>
        )
    }
}

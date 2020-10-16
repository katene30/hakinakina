import React from 'react'
import TrainingRecordForm from './TrainingRecordForm'


class TrainingRecord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hash: '',
      trainingRecord: false,
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {

  }

  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick(e){
    e.preventDefault()
    let handle = e.target.id
    if(handle == 'close'){
      this.setState({trainingRecord:false})
    }
    if(handle == 'new'){
      this.setState({trainingRecord:true})
    }
  }

  submit(e) {
    e.preventDefault()
    let {username, hash} = this.state
    this.setState({trainingRecord:false})
  }

  render () {
    return (
      
      <div className="container vh-100">
        {/* Title header */}
        <div className="row">
          <h2 className="text-uppercase">Training Record</h2>
        </div>

        <div className="row">
          {/* New session prompt */}
          <div className="col-4">
          {this.state.trainingRecord && 
          <div className="card" style= {{width: '18rem'}}  >
            <div className="card-header">
            <button onClick={this.handleClick} type="button" className="close" aria-label="Close">
              <span id='close' aria-hidden="true">&times;</span>
            </button>
            </div>
            <div className="card-body">
              <h5 className="card-title">New Training Record</h5>
              <h6 className="card-subtitle mb-2 text-muted">Please input the details for your activity</h6>
              <TrainingRecordForm/>

            </div>
          </div>
          }

          </div>

          <div className="col">
            {/* Add new training session */}
            <div className="row">
              <a className='h4' href='#' id='new' onClick={this.handleClick}>+ Add new training session</a>
            </div>
            {/* Table component */}
            <div className="row">
              <table className='table mt-4'>
                <thead>
                  <tr>
                    <th scope='col'>Date</th>
                    <th scope='col'>Activity</th>
                    <th scope='col'>Time/Distance</th>
                    <th scope='col'>Intensity</th>
                    <th scope='col'>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Eg. 7/5/18</td>
                    <td>Walk up Parihaka</td>
                    <td>1hr</td>
                    <td>Medium</td>
                    <td>Day after bball tourney, bit tired</td>
                  </tr>
                  <tr>
                    <td>24/6/19</td>
                    <td>Rugby game</td>
                    <td>80 mins</td>
                    <td>Medium</td>
                    <td>It was tiring</td>
                  </tr>
                  <tr>
                    <td>30/6/19</td>
                    <td>Hakinakina</td>
                    <td>1hr</td>
                    <td>Medium</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrainingRecord

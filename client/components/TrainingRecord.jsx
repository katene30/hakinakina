import React from 'react'
import { getUserTokenInfo } from '../utils/auth'
import { getLogsByUser,deleteLog } from '../api/logs'
import TrainingRecordForm from './TrainingRecordForm'
import { off } from '../../server/db/connection'


class TrainingRecord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trainingRecord: false,
      logs:[],
      pending:{},
      confirm:false
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.logSwitch = this.logSwitch.bind(this)
    this.confirm = this.confirm.bind(this)
  }

  componentDidMount() {
    let data = getUserTokenInfo()
    return getLogsByUser(data.id)
    .then(logs => {
      this.setState({logs})
    })
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

  logSwitch(log){
    // switching off
    if(log.active){
      this.setState({confirm:false})
      this.setState({pending:{}})
      log.active=false
    
    }else{
      // switching on
      log.active=true
      this.setState({confirm:true})
      this.setState({pending:log})
    }

  }

  confirm(e){
    console.log('hit')
    this.setState({confirm:true})
  }


  render () {
    return (
      
      <div className="container vh-100">
        {/* Confirm Modal */}
        

        

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
              <table className='table-hover table mt-4 training-records-table'>
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
                  {this.state.logs.map((log,i) => {
                    return(
                      <tr className={log.active ? 'table-danger' : undefined} onClick={() => this.logSwitch(log)} key={i}>
                        <td>{log.date}</td>
                        <td>{log.activity}</td>
                        <td>{log.length}</td>
                        <td>{log.intensity}</td>
                        <td>{log.notes}</td>
                        {log.active &&
                        <td>
                          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=>this.confirm()}>
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="delete-icon bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg ">
                          <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                          </svg>
                          </button>
                      </td>
                        }
                      </tr>
                    )
                  })}
                </tbody>
              </table>
                  {/* Modal */}
                  <div class="modal fade" id="exampleModal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Are you sure you want to delete this record?</p>
                {/* Record */}
                <div class="card">
                  <div class="card-header">
                    {this.state.pending.activity}
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{this.state.pending.date}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  <div class="card-footer text-muted">
                    2 days ago
                  </div>
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>




            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrainingRecord

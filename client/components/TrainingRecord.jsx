import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux' 
import {DateTime} from 'luxon'

import { getUserTokenInfo } from '../utils/auth'
import { getLogsByUser,deleteLog } from '../actions/logs'
import TrainingRecordForm from './TrainingRecordForm'


class TrainingRecord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trainingRecord: false,
      logs:[],
      pending:{},
      confirm:false,
      dayDiff:0
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.logSwitch = this.logSwitch.bind(this)
    this.confirm = this.confirm.bind(this)
    this.dayDiff = this.dayDiff.bind(this)
    this.delete = this.delete.bind(this)
    this.dateFormat = this.dateFormat.bind(this)
    this.byDate = this.byDate.bind(this)
  }

  componentDidMount() {
    let data = getUserTokenInfo()

    this.props.dispatch(getLogsByUser(data.id))
    .then(res => {
      this.setState({logs:this.props.logs.sort(this.byDate).reverse()})     
    })


  }

  byDate(a,b){
    return new Date(a.date).valueOf() - new Date(b.date).valueOf()
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
    if(log.id != this.state.pending.id){
      log.active=true
      this.setState({confirm:true})
      this.setState({pending:log})
    } else if(log.active){
      log.active=false
      this.setState({confirm:false})
      this.setState({pending:{}})
    }

  }

  confirm(e){
    e.stopPropagation()
    this.setState({confirm:true})
  }

  dayDiff(log){
    let date = log.date
    let dateX = new Date(JSON.stringify(date))
    let dateY = new Date()
    let timeDiff = dateY.getTime() - dateX.getTime()
    let dayDiff = Math.round(timeDiff / (1000*3600*24))

    log.dayDiff = dayDiff

  }

  dateFormat(log){
    let dt = new Date(JSON.stringify(log.date));
    let month = dt.getMonth()+1
    let dateOutput = dt.getDate( ) + '/' + month +'/'+ dt.getFullYear( );
    return dateOutput
  }

  delete(e){
    e.preventDefault()
    this.props.dispatch(deleteLog(this.state.pending))
    .then(res => {
      console.log('Congrats, something worked: ', res)
    })
    .catch(err => {
      console.log('Nah, something aint right: ', err)
    })
    location.reload()
  }


  render () {
    return (
      
      <div className="container vh-100">
        {/* Confirm Modal */}
        

        

        {/* Title header */}
        <div className="row bg-blue mb-2 mu-2">
          <h2 className="text-uppercase text-white">Training Record</h2>
        </div>

        <div className="row">
          {/* New session prompt */}
          {this.state.trainingRecord && 
          <div className="col-4">
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
          </div>
          }


          <div className="col">
            {/* Add new training session */}
            <div className="row">
              <a className='h4' href='#' id='new' onClick={this.handleClick}>+ Add new training session</a>
            </div>

            {/* Search bar */}
            <nav class="navbar navbar-light bg-light">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </nav>
            {/* Date Filter */}
            <form class="form-inline">
              <label class="sr-only" for="inlineFormInputName2">Filter date from</label>
              <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"/>

              <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"/>
              </div>

              <div class="form-check mb-2 mr-sm-2">
                <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
                <label class="form-check-label" for="inlineFormCheck">
                  Remember me
                </label>
              </div>

              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>

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

                  {this.state.logs.map((log,i) => {
                    this.dayDiff(log);
                    return(
                      <tr className={this.state.pending.id == log.id ? 'table-danger' : undefined} onClick={() => this.logSwitch(log)} key={i}>
                        <td>{DateTime.fromISO(log.date, {locale: "en-GB"}).toLocaleString()}</td>
                        <td>{log.activity}</td>
                        <td>{log.length}</td>
                        <td>{log.intensity}</td>
                        <td>{log.notes}</td>
                        {this.state.pending.id == log.id &&
                        <td>
                          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.confirm}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="delete-icon bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg ">
                          <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
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
                  <div className="modal fade" id="exampleModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className='font-weight-bold text-uppercase alert alert-danger text-center'>Are you sure you want to delete this record?</p>
                {/* Record */}
                <div className="card">
                  <div className="card-header h4 text-capitalize">
                    {this.state.pending.activity}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{this.dateFormat(this.state.pending)}</h5>
                    <p className="card-text">{this.state.pending.length}</p>
                    <p className="card-text">{this.state.pending.notes}</p>
                  </div>
                  <div className="card-footer text-muted">
                    {this.state.pending.dayDiff} days ago 
                  </div>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" onClick={this.delete}>Delete</button>
              </div>
            </div>
          </div>
        </div>


        <div className="row fixed-bottom bg-dark align-items-center">
          <Link to='/' className="btn btn-primary btn-lg my-2 ml-4">Home</Link>
        </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    logs: state.logs,
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(TrainingRecord)

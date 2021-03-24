import React, { Component } from 'react'
import {saveTerm} from '../actions/term'
import {connect} from 'react-redux' 
import { getLogsByUser } from '../actions/logs'

export class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          total: 20,
          month: new Date().getMonth(),
          term:0,
          attendance:0,
          progress:0
        }
        this.term = this.term.bind(this)
        this.attendance = this.attendance.bind(this)
      }
    
      componentDidMount() {
        this.term()
        this.props.dispatch(getLogsByUser(this.props.auth.user.id))
        .then(()=>{
          this.attendance()
        })
      }
      
      componentDidUpdate(prevProps,prevState){
        if(this.state.term != prevState.term){
          this.setState({attendance:0})
        }
        if(this.state.attendance != prevState.attendance){
          this.attendance()
        }
      }

      attendance(){
        const attendance = this.state.attendance
        const total = this.state.total
        const logs = this.props.logs
        const term = this.state.term

        console.log(logs)
        let acc = 0

        for(let i=0; i < logs.length; i++){
          if(logs[i].term == term && logs[i].activity == 'Hakinakina'){
            acc ++
          }
        }

        this.setState({attendance:acc}, this.setState({progress:(acc/total)*100}))
      }

      term(){
        const month = this.state.month
        if(month == 1 || month == 2 ||month ==  3 ){
          this.setState({term: 1},()=>{
            this.props.dispatch(saveTerm(this.state.term))
          })
        }else if(month == 4||month == 5){
          this.setState({term:2},()=>{
            this.props.dispatch(saveTerm(this.state.term))
          })
        }else if(month == 6||month == 7||month == 8){
          this.setState({term:3},()=>{
            this.props.dispatch(saveTerm(this.state.term))
          })
        }else if(month == 9||month == 10||month == 11){
          this.setState({term: 4},()=>{
            this.props.dispatch(saveTerm(this.state.term))
          })
        }else{
          this.setState({term:0})
        }


      }
    
    
    render() {
      const prog = {
        width: this.state.progress + "%"
      }

        return (
            <div>
              <div className="progress">
                <div className="progress-bar" style={prog} className="bg-light-green" role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    term: state.term,
    logs: state.logs,
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(ProgressBar)

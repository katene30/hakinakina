import React, { Component } from 'react'

export class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          total: 20,
          month: new Date().getMonth(),
          term:0,
          attendance:0
        }
        this.term = this.term.bind(this)
      }
    
      componentDidMount() {
        this.term()
        this.attendance()
      }
      
      componentDidUpdate(prevProps,prevState){
        if(this.state.term != prevState.term){
          this.setState({attendance:0})
        }
      }

      attendance(){
        const attendance = this.state.attendance
        const total = this.state.total
        return (attendance/total)*100
      }

      term(){
        const month = this.state.month
        if(month == 1 || month == 2 ||month ==  3 ){
          this.setState({term: 1})
        }else if(month == 4||month == 5){
          this.setState({term:2})
        }else if(month == 6||month == 7||month == 8){
          this.setState({term:3})
        }else if(month == 9||month == 10||month == 11){
          this.setState({term: 4})
        }else{
          this.setState({term:0})
        }
      }
    
    
    render() {
        return (
            <div>
              <button type="button" className="btn btn-secondary" onClick={() => this.setState({attendance:this.state.attendance ++})}>attendance</button>
              <button type="button" className="btn btn-secondary" onClick={() => this.setState({term:this.state.term ++})}>term</button>

              <div className="progress">
                <div className="progress-bar w-75" role="progressbar" aria-valuenow={this.state.attendance} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
        )
    }
}

export default ProgressBar

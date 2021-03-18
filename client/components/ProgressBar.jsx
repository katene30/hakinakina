import React, { Component } from 'react'

export class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          sessions: 20
        }
      }
    
      componentDidMount() {
    
      }
    
    
    render() {
        return (
            <div>
              <div className="progress">
                <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
        )
    }
}

export default ProgressBar

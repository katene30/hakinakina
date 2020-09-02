import React, { Component } from 'react'

export class NutritionPyramid extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          hash: '',
          success:'',
          error:'',
        }
        this.highlight = this.highlight.bind(this)
      }
    
      componentDidMount() {
    
      }
    
      highlight(e) {
        this.setState({ [e.target.id]: e.target.value })
      }

    
    render() {
        return (
            <div>

              <div className="row justify-content-center">
                <img className="hvr-grow" src="/utils/nutrition-pyramid/fat-crop.png" alt="fat" id="fat"/>
              </div>
              <div className="row justify-content-center">
                  <img className="hvr-grow" src="/utils/nutrition-pyramid/milk-crop.png" alt="milk" id="milk"/>
                  <img className="hvr-grow" src="/utils/nutrition-pyramid/meat-crop.png" alt="meat" id="meat"/>
              </div>

              <div className="row justify-content-center">
                  <img className="hvr-grow" src="/utils/nutrition-pyramid/vegetable-crop.png" alt="vegetable" id="vegetable"/>
                  <img className="hvr-grow" src="/utils/nutrition-pyramid/fruit-crop.png" alt="fruit" id="fruit"/>
              </div>

              <div className="row justify-content-center">
                <img className="hvr-grow" src="\utils\nutrition-pyramid\bread-crop.png" alt="bread" id="bread"/>
              </div>
            </div>
        )
    }
}

export default NutritionPyramid

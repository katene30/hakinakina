import React, { Component } from 'react'

export class NutritionPyramid extends Component {
    constructor(props) {
        super(props)
        this.state = {
          fat:false,
          milk:false,
          meat:false,
          vegetable:false,
          fruit:false,
          bread:false
        }
        this.highlight = this.highlight.bind(this)
        this.unhighlight = this.unhighlight.bind(this)
      }
    
      componentDidMount() {
    
      }
    
      highlight(e) {
        this.setState({ [e.target.id]: true })
      }

      unhighlight(e) {
        this.setState({ [e.target.id]: false })
      }
    
    render() {
        return (
            <div>

              <div className="row justify-content-center food-container">
                <img className="hvr-grow" src="/utils/nutrition-pyramid/fat-crop.png" alt="fat" id="fat" onMouseEnter={this.highlight} onMouseLeave={this.unhighlight}/>
                {this.state.fat &&
                <div className="centered">
                  <h4>Fats, Oils & Sweets</h4>
                  <p className="lead text-capitalize">Use sparingly</p>
                  <p>Provides calories but few vitamins and minerals.</p>
                </div>
                }
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

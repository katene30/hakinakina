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
                <img className="hvr-grow food-image" src="/utils/nutrition-pyramid/fat-crop.png" alt="fat" id="fat" onMouseEnter={this.highlight} onMouseLeave={this.unhighlight}/>
                
                <div id="fat-text" className={`text-left food-pos ${this.state.fat ? 'visible' : 'invisible'}`}>
                  <h4>Fats, Oils & Sweets</h4>
                  <p className="lead text-capitalize">Use sparingly</p>
                  <p>Provides calories but few vitamins and minerals.</p>
                </div>
              </div>

              <div className="row justify-content-center">

                <div className="food-container">
                  <img className="hvr-grow food-image mid-pyramid " src="/utils/nutrition-pyramid/milk-crop.png" alt="milk" id="milk"/>
                  <div className="food-pos text-right" id='milk-text'>
                    <h4>Milk, Yoghurt & Cheese</h4>
                    <p className="lead text-capitalize">3-4 Servings</p>
                    <p>Packed with bone strengthening calcium, high quality proteins and essential electrolytes.</p>
                  </div>
                </div>

                  <div className="food-container">
                    <img className="hvr-grow food-image mid-pyramid" src="/utils/nutrition-pyramid/meat-crop.png" alt="meat" />
                    <div className="food-pos text-left" id="meat-text">
                      <h4>Meat, Poultry, Fish, Dry Beans, Eggs & Nuts</h4>
                      <p className="lead text-capitalize">2-3 Servings</p>
                      <p>Protein is needed by the body for building and repair.</p>
                  </div>
                  
                  </div>  
              </div>

              <div className="row justify-content-center">

                <div className="food-container">
                  <img className="hvr-grow food-image mid-pyramid" src="/utils/nutrition-pyramid/vegetable-crop.png" alt="vegetable" id="vegetable"/>
                  <div className="food-pos text-right" id="vegetable-text">
                      <h4>Vegetables</h4>
                      <p className="lead text-capitalize">3-5 Servings</p>
                      <p>Chock-full of fiber and essential nutrients such as vitamin A.</p>
                  </div>
                </div>

                  <div className="food-container">
                    <img className="hvr-grow food-image mid-pyramid" src="/utils/nutrition-pyramid/fruit-crop.png" alt="fruit" id="fruit"/>
                    <div className="food-pos text-left" id="fruit-text">
                        <h4>Fruits</h4>
                        <p className="lead text-capitalize">2-4 Servings</p>
                        <p>Fruits are low in fat, so they’re great for bulking out meals and making you feel full without adding too many calories.</p>
                    </div>
                  </div>


              </div>

              <div className="row justify-content-center">
                <div className="food-container">
                  <img className="hvr-grow food-image" src="\utils\nutrition-pyramid\bread-crop.png" alt="bread" id="bread"/>
                  <div className="food-pos" id="bread-text">
                          <h4>Bread, Cereal Rice & Pasta</h4>
                          <p className="lead text-capitalize">6-11 Servings</p>
                          <p>Provides your body's main source of energy to fuel your activity.</p>
                  </div>
                </div>
              </div>



            </div>
        )
    }
}

export default NutritionPyramid

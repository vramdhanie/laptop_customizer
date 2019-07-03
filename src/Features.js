import React, { Component } from 'react';
import './Features.css';
import FeatureOption from './FeatureOption.js';

// Right now, Features is just a passthrough component. 
// It doesn't do anything outside of providing props to FeatureOption.
// Do you need this component?
// Better yet, what parts of FeatureOption make more sense here?
class Features extends Component {
    render() {  
          
          return (
            <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <FeatureOption
                features={this.props.features}
                selected={this.props.selected}
                handleUpdate={this.props.handleUpdate}/>
            </section>
          )
    }
}

export default Features
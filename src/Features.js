import React, { Component } from 'react';
import './Features.css';
import FeatureOption from './FeatureOption.js';

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
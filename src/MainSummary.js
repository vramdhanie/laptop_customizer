import React from 'react';
import SummaryOption from './SummaryOption';
import SummaryTotal from './SummaryTotal';
import './MainSummary.css';

export default function MainSummary(props){
    
    return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {
                Object.keys(props.options).map(option =>
                  <SummaryOption 
                    key={option}
                    label={option}
                    value={props.options[option].name}
                    cost={props.options[option].cost}
                  />

                )
             }
            
            <SummaryTotal 
              value={props.options}
            />
        </section>
    )
}
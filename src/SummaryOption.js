import React from 'react';
import './SummaryOption.css';

export default function SummaryOption(props){
    
    return (
        <div className="summary__option">
            <div className="summary__option__label">
                {props.label}
            </div>
            <div className="summary__option__value">
                {props.value}
            </div>
            <div className="summary__option__cost">
               {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.cost)}
            </div>
        </div>
    )
}
import React from 'react';
import './SummaryTotal.css';

export default function SummaryTotal(props){
    
    const total = Object.keys(props.value)
    .reduce((acc,curr) => acc + props.value[curr].cost, 0);
    return (
        <div className="summary__total">
            <div className="summary__total__label">
                {"Your Price: "}
            </div>
            <div className="summary__total__value">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total)}
            </div>
        </div>
    )
}
import React from 'react';
import './FeatureItem.css';
export default function FeatureItem(props){
    const selectedClass = props.item.name === props.selectedItem.name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;
    
    return (
        <li className="feature__item">
            <div className={featureClass} 
                onClick={() => props.onClick(props.feature, props.item)}
            >
                {props.item.name}
                (
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(props.item.cost)}
                )

            </div>
        </li>
    )
    
}

FeatureItem.propTypes = {
    onClick: () => {}
}
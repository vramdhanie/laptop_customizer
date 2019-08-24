import React from 'react';
import FeatureItem from './FeatureItem';
import './Feature.css';

export default function Feature(props){
    return (
        <div className='feature'>
            <div className='feature__name'>
                {props.name}
            </div>
            <ul className='feature__list'>
                {
                    props.items.map((item, index) =>
                    <FeatureItem 
                        
                        feature={props.name}
                        item={item}
                        
                        key={index}
                        selectedItem={props.selectedItem[props.name]}
                        onClick={props.onClick}
                    />                
                    )
                }
            </ul>
        </div>
    )
}
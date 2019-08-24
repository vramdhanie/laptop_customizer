import React from 'react';
import Feature from './Feature';
import './MainForm.css';

export default function MainForm(props){
    return(
        <section className='main__form'>
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {
                Object.keys(props.features).map((feature) =>
                  <Feature 
                    key={feature}
                    name={feature}
                    items={props.features[feature]}
                    selectedItem={props.options}
                    onClick={props.onClick}
                  />
                )
            }
        </section>
    )

}


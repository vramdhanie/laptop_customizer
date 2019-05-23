import React from 'react';
import '../App.css';

import FeatureList from '../FeatureList/FeatureList';
import Summary from '../Summary/Summary';

export default class CustomizerApp extends React.Component {
    render() {
        return (
            <main>
                <section className="main__form">
                    <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                    { this.props.features }
                </section>
                <section className="main__summary">
                    <h3>NEW GREENLEAF 2018</h3>
                    {this.props.summary}
                    <div className="summary__total">
                        <div className="summary__total__label">Your Price: </div>
                        <div className="summary__total__value">
                            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                                .format(this.props.total) }
                        </div>
                    </div>
            </section>
          </main>
        );
    }
}
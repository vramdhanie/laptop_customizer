import React from 'react';
import '../App.css';

import FeatureList from '../FeatureList/FeatureList';
import Summary from '../Summary/Summary';

export default class CustomizerApp extends React.Component {
    render() {
        return (
            <main>
                <FeatureList features={this.props.features} />
                <Summary summary={this.props.summary} total={this.props.total} />
            </main>
        );
    }
}
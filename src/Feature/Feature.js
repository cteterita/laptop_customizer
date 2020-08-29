import React, { Component } from 'react';

import Options from '../Options/Options';

class Feature extends Component {
    render() {
        const { featureName, idx } = this.props;
        const featureHash = featureName + '-' + idx;
    
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{featureName}</h3>
                </legend>
                <Options
                    selected={this.props.selected}
                    feature={this.props.feature}
                    updateFeature={this.props.updateFeature}
                    featureName={featureName}
                />
            </fieldset>
        );
    }
}

export default Feature;
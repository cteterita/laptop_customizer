import React, { Component } from 'react';

import Options from '../Options/Options';

class Feature extends Component {
    render() {
        const { feature, idx } = this.props;
        const featureHash = feature + '-' + idx;
    
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                <Options
                    selected={this.props.selected}
                    features={this.props.features}
                    updateFeature={this.props.updateFeature}
                    feature={feature}
                    idx={idx}
                    key={idx}
                />
            </fieldset>
        );
    }
}

export default Feature;
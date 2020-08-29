import React, { Component } from 'react';

import Feature from '../Feature/Feature';

class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((featureName, idx) => {
            return (
                <Feature 
                    selected={this.props.selected[featureName]}
                    feature={this.props.features[featureName]}
                    updateFeature={this.props.updateFeature}
                    featureName={featureName}
                    idx={idx}
                    key={idx}
                />
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        );
    }
    
}

export default Features;
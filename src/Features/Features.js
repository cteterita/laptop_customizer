import React, { Component } from 'react';

import Feature from '../Feature/Feature';

class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            return (
                <Feature 
                    selected={this.props.selected}
                    features={this.props.features}
                    updateFeature={this.props.updateFeature}
                    feature={feature}
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
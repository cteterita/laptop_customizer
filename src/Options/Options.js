import React, { Component } from 'react';

import slugify from 'slugify';
import { USCurrencyFormat } from '../App';

class Options extends Component {
    render() {
        const { feature, featureName, selected } = this.props;
        return feature.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
            <div key={itemHash} className="feature__item">
                <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(featureName)}
                checked={item.name === selected.name}
                onChange={e => this.props.updateFeature(featureName, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
            </div>
            );
        });
    }
}

export default Options;
import React, { Component } from 'react';
import { USCurrencyFormat } from '../App'; //TODO: Should this be passed as a prop?
import Summary from '../Summary/Summary';
import Total from '../Total/Total';

class Cart extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary selected={this.props.selected} />
                <Total selected={this.props.selected} />
            </section>
        );
    }
}

export default Cart;
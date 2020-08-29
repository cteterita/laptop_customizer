import React, { Component } from 'react';
import { USCurrencyFormat } from '../App'; //TODO: Should this be passed as a prop?
import Summary from '../Summary/Summary';

class Cart extends Component {
    render() {
        // TODO: Make summary component
        

        //TODO: Make total component
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (<section className="main__summary">
        <h2>Your cart</h2>
        <Summary 
            selected={this.props.selected}
        />
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>)
    }
}

export default Cart;
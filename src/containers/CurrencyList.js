import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrencyList extends Component {
  renderSymbols(currencyData) {
    const keys = Object.keys(currencyData);
    return keys.map( key => {
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{currencyData[key].USD}</td>
          <td>{currencyData[key].EUR}</td>
          <td>{currencyData[key].AED}</td>
          <td>{currencyData[key].INR}</td>
        </tr>
      );
    })
  }

  render () {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>USD</th>
              <th>EUR</th>
              <th>AED</th>
              <th>INR</th>
            </tr>
          </thead>
          <tbody>
            {this.props.currency.map( this.renderSymbols )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ currency }) => ({ currency })

export default connect(mapStateToProps)(CurrencyList);
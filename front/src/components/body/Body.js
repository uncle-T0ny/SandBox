import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './Body.scss';

const mapStateToProps = state => {
  return {
    btcInUSD: state.ticker.price_usd
  }
};

@connect(mapStateToProps)
class Body extends PureComponent {
  render() {
    return (
      <div className="Body">
        body
      </div>
    )
  }
};

export { Body };
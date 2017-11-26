import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import { InfoBlock } from './../Customizer';

import './Head.scss';

const mapStateToProps = state => {
  return {
    btcInUSD: state.ticker.price_usd
  }
};

@connect(mapStateToProps)
class Head extends PureComponent {
  render() {
    return (
      <div className="Head">
        <InfoBlock />
      </div>
    )
  }
};

export { Head };
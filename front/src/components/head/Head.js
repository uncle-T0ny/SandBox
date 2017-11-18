import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import { BTCInfoBlock } from './../BTCInfoBlock/BTCInfoBlock';

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
        <BTCInfoBlock/>
      </div>
    )
  }
};

export { Head };
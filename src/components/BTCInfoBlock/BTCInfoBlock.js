import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './BTCInfoBlock.scss';

const mapStateToProps = state => {
  return {
    btcInUSD: state.ticker.price_usd
  }
};

@connect(mapStateToProps)
class BTCInfoBlock extends PureComponent {
  render() {
    return (
      <div className="BTCInfoBlock">
        <div>state: {this.props.btcInUSD}</div>
      </div>
    )
  }
};

export { BTCInfoBlock };
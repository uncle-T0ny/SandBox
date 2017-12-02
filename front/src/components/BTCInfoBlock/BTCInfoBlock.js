import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './BTCInfoBlock.scss';

const mapStateToProps = state => {
  return {
    btcInUSD: state.ticker.price_usd
  };
};

@connect(mapStateToProps)
class BTCInfoBlock extends PureComponent {
  componentWillMount() {
    this.props.dispatch({ type: 'FETCH_TICKER' });
  }

  render() {
    return (
      <div className="BTCInfoBlock">
        <div>1 BTC = {this.props.btcInUSD} USD</div>
      </div>
    );
  }
}

export { BTCInfoBlock };
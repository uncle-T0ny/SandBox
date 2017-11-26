import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import './ETHInfoBlock.scss';

const mapStateToProps = state => {
  return {
    btcInUSD: state.ticker.price_usd
  }
};

@connect(mapStateToProps)
class ETHInfoBlock extends PureComponent {
  componentWillMount() {
    this.props.dispatch({ type: 'FETCH_TICKER' });
  }

  render() {
    return (
      <div className="ETHInfoBlock">
        <div>1 ETH = {this.props.btcInUSD} USD</div>
      </div>
    )
  }
};

export { ETHInfoBlock };
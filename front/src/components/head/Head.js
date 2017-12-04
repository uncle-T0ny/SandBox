import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { InfoBlock } from './../Customizer';
import { DatePicker } from 'antd';
import moment from 'moment';

import './Head.scss';

const mapStateToProps = state => {
  return {
    btcInUSD: state.ticker.price_usd
  };
};

const dateFormat = 'YYYY-MM-DD';

@connect(mapStateToProps)
class Head extends PureComponent {
  render() {
    return (
      <div className="Head">
        <InfoBlock />
        <DatePicker
          defaultValue={moment('2015-06-06', dateFormat)}
          format={dateFormat}
          placeholder="Select Time" />
      </div>
    );
  }
}

export { Head };
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
        {/*<DatePicker*/}
          {/*defaultValue={moment('2015-06-06', dateFormat)}*/}
          {/*format={dateFormat}*/}
          {/*placeholder="Select Time" />*/}

        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/travel-map">
          <div>Travels</div>
        </Link>
        <Link to="/registration">
          <div>Registrations</div>
        </Link>

        <InfoBlock />
      </div>
    );
  }
}

export { Head };
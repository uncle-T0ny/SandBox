import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};

@connect(mapStateToProps)
class CounterState extends PureComponent {
  render() {
    return (
      <div>
        <div>state: {this.props.counter}</div>
      </div>
    )
  }
};

export { CounterState };
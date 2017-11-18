import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import TrafficLight from './TrafficLight/TrafficLight';
import './StateMachine.scss';

const mapStateToProps = state => {
  return {
  }
};

@connect(mapStateToProps)
class StateMachine extends PureComponent {

  render() {
    return (
      <div className="StateMachine">
        <TrafficLight />
      </div>
    )
  }
};

export { StateMachine };
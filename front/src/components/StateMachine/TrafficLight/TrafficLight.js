/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import Promise from 'bluebird';
import Lamp, { lampTypes } from './Lamp';

class TrafficLight extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeLamps: [],
      flashingLams: [],
    };
  }
  componentWillMount() {
    const runCycle = () => {
      this.setState({
        activeLamps: [],
        flashingLams: [],
      });
      this.setState({
        activeLamps: [lampTypes.red],
        flashingLams: [],
      });
      Promise.delay(2000)
        .then(() => {
          this.setState({
            activeLamps: [lampTypes.red],
            flashingLams: [lampTypes.red],
          });
        })
        .delay(1000)
        .then(() => {
          this.setState({
            activeLamps: [lampTypes.yellow],
            flashingLams: [lampTypes.yellow],
          });
        })
        .delay(1000)
        .then(() => {
          this.setState({
            activeLamps: [lampTypes.yellow, lampTypes.green],
            flashingLams: [lampTypes.yellow],
          });
        })
        .delay(1000)
        .then(() => {
          this.setState({
            activeLamps: [lampTypes.green],
            flashingLams: [],
          });
        })
        .delay(2000)
        .then(() => {
          this.setState({
            activeLamps: [lampTypes.green],
            flashingLams: [lampTypes.green],
          });
        })
        .delay(2000)
        .then(() => {
          runCycle();
        });
    };
    runCycle();
  }
  render() {
    const { activeLamps, flashingLams } = this.state;
    return (
      <div>
        <Lamp
          type={activeLamps.includes(lampTypes.red) ? lampTypes.red : lampTypes.default}
          useFlashing={flashingLams.includes(lampTypes.red)}
        />
        <Lamp
          type={activeLamps.includes(lampTypes.yellow) ? lampTypes.yellow : lampTypes.default}
          useFlashing={flashingLams.includes(lampTypes.yellow)}
        />
        <Lamp
          type={activeLamps.includes(lampTypes.green) ? lampTypes.green : lampTypes.default}
          useFlashing={flashingLams.includes(lampTypes.green)}
        />
      </div>
    );
  }
}

export default TrafficLight;
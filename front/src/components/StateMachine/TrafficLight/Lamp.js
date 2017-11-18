/* eslint-disable react/prefer-stateless-function,react/prop-types */
import React, { PureComponent } from 'react';
import cn from 'classnames';
import './Lamp.scss';

export const lampTypes = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
  default: 'default',
};

class Lamp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFlashing: false,
    };
  }
  componentDidMount() {
    this.flashingInverval = setInterval(() => {
      const { isFlashing } = this.state;
      this.setState({ isFlashing: !isFlashing });
    }, 300);
  }
  componentWillUnmount() {
    clearInterval(this.flashingInverval);
  }
  render() {
    let colorClass;
    const { isFlashing } = this.state;
    const { useFlashing } = this.props;
    let { type } = this.props;
    if (useFlashing && isFlashing) {
      type = lampTypes.default;
    }
    switch (type) {
      case lampTypes.red:
        colorClass = 'Lamp--red';
        break;
      case lampTypes.yellow:
        colorClass = 'Lamp--yellow';
        break;
      case lampTypes.green:
        colorClass = 'Lamp--green';
        break;
      case lampTypes.default:
        colorClass = 'Lamp--default';
        break;
      default:
        colorClass = 'Lamp--default';
    }
    return (
      <div className={cn('Lamp', colorClass)} />
    );
  }
}

export default Lamp;

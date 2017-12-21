import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Body.scss';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

@connect(mapStateToProps)
class Body extends PureComponent {

  render() {
    return (
      <div className="Body">
        BODY
        { this.props.isAuthenticated && <div>User authenticated</div>}
      </div>
    );
  }
};

export { Body };
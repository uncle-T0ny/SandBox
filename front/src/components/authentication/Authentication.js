import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ServerAPI from './../../api/ServerAPI';
import { Input, Button } from 'antd';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

import './Authentication.scss';

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    isActiveLoginForm: state.auth.isActiveLoginForm,
  };
};

@connect(mapStateToProps)
class Authentication extends PureComponent {
  onLogIn() {
    const { email, password } = this.props;
    this.props.dispatch({ type: 'CHANGE_FIELD', isFetchAuth: true });
    ServerAPI.login(email, password)
      .then((token) => {
        this.props.dispatch({ type: 'SET_TOKEN', token  });
        this.props.dispatch({ type: 'CHANGE_FIELD', field: 'isAuthenticated', value: true  });
        this.props.dispatch({ type: 'CHANGE_FIELD', field: 'isFetchAuth', value: false });
      });
  }

  onChangeField(field, value) {
    this.props.dispatch({ type: 'CHANGE_FIELD', field: field, value });
  }

  render() {
    const { isActiveLoginForm } = this.props;

    return (
      <div className="Body">
        <div className="Authentication">
          { isActiveLoginForm ?
            <LoginForm />
            :
            <SignUpForm />
          }

        </div>

        {/*<Input placeholder="email"*/}
               {/*value={this.props.email}*/}
               {/*onChange={(e) => this.onChangeField('email', e.target.value)} />*/}
        {/*<Input placeholder="password"*/}
               {/*value={this.props.password}*/}
               {/*onChange={(e) => this.onChangeField('password', e.target.value)} />*/}
        {/*<Button type="primary" onClick={() => this.onLogIn()}>LOG IN</Button>*/}
      </div>
    );
  }
};

export { Authentication };
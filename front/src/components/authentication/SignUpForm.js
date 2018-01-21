import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

import './SignUpForm.scss';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

@connect(mapStateToProps)
class AntSignUpForm extends PureComponent {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleClickLogin() {
    this.props.dispatch({ type: 'CHANGE_FIELD', field: 'isActiveLoginForm', value: true  });
  }

  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={(e) => this.handleSubmit(e)} className="SignUpForm">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" className="SignUpForm__InpIco" />} placeholder="Username"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" className="SignUpForm__InpIco" />} type="password" placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('passwordRe', {
              rules: [{ required: true, message: 'Please confirm your Password!' }, {
                validator: (rule, value, callback) => this.checkPassword(rule, value, callback),
              }],
            })(
              <Input prefix={<Icon type="lock" className="SignUpForm__InpIco" />} type="password" placeholder="Retype Password"/>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="SignUpForm__SubmitBtn">
              Sign up
            </Button>
          </FormItem>
        </Form>

        <div>Or <a onClick={() => this.handleClickLogin()}>log in</a></div>

      </div>
    );
  }
}

const SignUpForm =  Form.create()(AntSignUpForm);
export { SignUpForm };
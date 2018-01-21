import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

import './LoginForm.scss';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

@connect(mapStateToProps)
class AntLoginForm extends PureComponent {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleClickRegister() {
    this.props.dispatch({ type: 'CHANGE_FIELD', field: 'isActiveLoginForm', value: false  });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="LoginForm">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" className="LoginForm__InpIco" />} placeholder="Username"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" className="LoginForm__InpIco" />} type="password" placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="LoginForm__SubmitBtn">
              Log in
            </Button>
          </FormItem>
        </Form>
        <div>Or <a onClick={() => this.handleClickRegister()}>register now!</a></div>

      </div>

    );
  }
}

const LoginForm =  Form.create()(AntLoginForm);
export { LoginForm };
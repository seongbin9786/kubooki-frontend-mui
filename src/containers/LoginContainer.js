import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getUserInfo,
  getUserLoggedIn,
  loginWithIdAndPw,
  loginWithSocial,
  logout,
  socialLogout
} from '../modules/SessionActions';

class LoginContainer extends Component {
    handleLocalLogin = ({ id, pw }) => this.props.loginWithIdAndPw(id, pw);

    handleSocialLogin = type => () => this.props.loginWithSocial(type);

    handleSocialLogout = type => () => this.props.socialLogout(type);

    handleLogout = () => this.props.logout();

    render = () => {
      const { userInfo, isLoggedIn } = this.props;
      const Component = this.props.render;

      return (
        <Component
          isLoggedIn={isLoggedIn}
          userInfo={userInfo}
          handleLocalLogin={this.handleLocalLogin}
          handleSocialLogin={this.handleSocialLogin}
          handleLogout={this.handleLogout}
        />
      );
    }
}

const mapStateToProps = ({ session }) => ({
  userInfo: getUserInfo(session),
  isLoggedIn: getUserLoggedIn(session)
});

const mapDispatchToProps = {
  loginWithIdAndPw,
  loginWithSocial,
  logout,
  socialLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getUserInfo,
  getUserLoggedIn,
  loginWithIdAndPw,
  loginWithSocial,
  logout,
} from '../modules/SessionActions';

class LoginContainer extends Component {

  render = () => {
    const { userInfo,
      isLoggedIn,
      loginWithIdAndPw,
      loginWithSocial,
      socialLogout,
      logout,
      ...upperProps
    } = this.props;
    const Component = this.props.children;

    return <div>
      {
        React.cloneElement(Component, {
          isLoggedIn,
          userInfo,
          handleLocalLogin: loginWithIdAndPw,
          handleSocialLogin: loginWithSocial,
          handleLogout: logout,
          ...upperProps
        })
      }
    </div>;
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
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
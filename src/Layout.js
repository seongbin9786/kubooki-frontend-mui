import React, { Component } from 'react';

import Header from './containers/Header';
import FabNav from './components/navs/FabNav';
import withLoader from './utils/withLoader';
import LoginContainer from './containers/LoginContainer';

class Layout extends Component {

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    this.scrollToTop();
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <LoginContainer>
          <Header />
        </LoginContainer>
        {children}
        <FabNav />
      </React.Fragment>
    );
  }
}

export default withLoader(Layout);
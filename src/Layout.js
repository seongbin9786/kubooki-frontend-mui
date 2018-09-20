import React, { Component } from 'react';

import Header from './containers/Header';
import FabNav from './components/navs/FabNav';
import { globalUser } from './modules/store';
import withLoader from './utils/withLoader';

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
        <Header user={globalUser} />
        {children}
        <FabNav />
      </React.Fragment>
    );
  }
}

export default withLoader(Layout);
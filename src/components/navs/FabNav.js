import React, { Component } from 'react';
import { withWidth } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { TabList } from '../../configs/NewsTabConfig';
import FabNavItem from './FabNavItem';
import FabNavMainItem from './FabNavMainItem';


class FloatingActionButtons extends Component {
  state = {
    open: false
  }

  handleClick = () =>
    this.setState(({ open }) => ({
      open: !open
    }));

  navigateTo = name => () => {
    this.handleClick();

    const { history } = this.props;
    const index = TabList.findIndex(([tabName]) => tabName === name);
    const [, link] = TabList[index];
    history.push(link);
  }

  render() {
    const { open } = this.state;
    const isMobile = this.props.width === 'xs';

    console.log('OPEN:', open);

    return (
      <React.Fragment>
        {TabList.map(([name], index) =>
          <FabNavItem
            key={index}
            isMobile={isMobile}
            index={index}
            name={name}
            open={open}
            navigateTo={this.navigateTo}
          />
        )}
        <FabNavMainItem handleClick={this.handleClick} isMobile={isMobile} />
      </React.Fragment>
    );
  }
}

export default withWidth()(withRouter(FloatingActionButtons));
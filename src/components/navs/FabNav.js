import React, { Component } from 'react';
import { withWidth } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import FabNavItem from './FabNavItem';
import FabNavMainItem from './FabNavMainItem';
import NewsConstants from '../../constants/NewsConstants';


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
    const index = NewsConstants.getTabIndexByCategoryName(name);
    const link = NewsConstants.getLinkByIndex(index);
    history.push(link);
  }

  render() {
    const { open } = this.state;
    const ismobile = this.props.width === 'xs';

    return (
      <React.Fragment>
        {NewsConstants.getCategoriesObject().map(({ name }, idx) =>
          <FabNavItem
            key={idx}
            ismobile={ismobile}
            index={idx}
            name={name}
            open={open}
            navigateTo={this.navigateTo}
          />
        )}
        <FabNavMainItem handleClick={this.handleClick} ismobile={ismobile ? 'ismobile' : undefined} />
      </React.Fragment>
    );
  }
}

export default withWidth()(withRouter(FloatingActionButtons));
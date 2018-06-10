import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';

import SearchBar from './SearchBar';
import SortBar from './SortBar';
import GridListTemplate from './GridListTemplate';

import { popupList, popupDetail } from './store';
import PopupManageItem from './PopupManageItem';
import PopupDetail from './PopupDetail';
import CreateIcon from './CreateIcon';

const styles = theme => ({
  root: {

  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  subHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: -20,
  },
  listContainer: {

  },
});

class PopupManagePage extends Component {
  state = {
    detailOpen: false,
    detailId: -1,
  };

  handleClick = id => () => this.setState({ detailOpen: true, detailId: id });

  render() {
    const { classes } = this.props;
    const { detailId, detailOpen } = this.state;
    const subHeader = <SortBar tabName='진행 중' />;
    const items = popupList.map((item, index) => <PopupManageItem popup={item} key={index} handleClick={this.handleClick} />);

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant='display1'>팝업 관리</Typography>
          <SearchBar noMargin label='팝업 검색' />
        </div>
        <div className={classes.subHeader}>
          <CreateIcon />
        </div>

        <div className={classes.listContainer}>
          <GridListTemplate
            titleType='display1'
            items={items}
            subHeader={subHeader}
            spacing={16}
            titleLeftmargin={24}
            noMoreLoadBtn
          />
        </div>

        {detailOpen ? <PopupDetail popupDetail={popupDetail} /> : null}
      </div>
    );
  }
}

export default withStyles(styles)(PopupManagePage);
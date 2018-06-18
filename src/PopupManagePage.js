import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Typography } from '@material-ui/core';

import SearchBar from './SearchBar';
import SortBar from './SortBar';
import GridListTemplate from './GridListTemplate';

import { popupList, popupDetail } from './store';
import PopupManageItem from './PopupManageItem';
import PopupDetail from './PopupDetail';
import CreateIcon from './CreateIcon';
import { header } from './stylesManagePage';

const styles = {
  header,
  subHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: -20,
  },
};

class PopupManagePage extends Component {
  state = {
    detailOpen: false,
    detailId: -1,
  };

  handleClick = id => () => this.setState({ detailOpen: true, detailId: id });

  render() {
    const { classes } = this.props;
    const { detailOpen } = this.state;
    const subHeader = <SortBar tabName='진행 중' />;
    const items = popupList.map((item, index) => <PopupManageItem popup={item} key={index} handleClick={this.handleClick} />);

    return (
      <div>
        <div className={classes.header}>
          <Typography variant='display1'>팝업 관리</Typography>
          <SearchBar noMargin label='팝업 검색' />
        </div>

        <div className={classes.subHeader}>
          <CreateIcon />
        </div>

        <GridListTemplate
          titleType='display1'
          items={items}
          subHeader={subHeader}
          noMoreLoadBtn
        />

        {detailOpen ? <PopupDetail popupDetail={popupDetail} /> : null}
      </div>
    );
  }
}

export default injectSheet(styles)(PopupManagePage);
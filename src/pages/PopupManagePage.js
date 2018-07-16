import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Typography } from '@material-ui/core';

import SearchBar from '../components/inputs/SearchBar';
import SortBar from '../components/inputs/SortBar';
import GridListTemplate from '../utils/GridListTemplate';

import { popupList, popupDetail } from '../modules/store';
import PopupManageItem from '../components/PopupManageItem';
import PopupDetail from '../containers/PopupDetail';
import CreateIconBtn from '../components/buttons/CreateIconBtn';
import { header } from '../styles/stylesManagePage';

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
          <CreateIconBtn />
        </div>

        <GridListTemplate
          titleType='display1'
          items={items}
          subHeader={subHeader}
          noMoreLoadBtn
        />

        <PopupDetail
          open={detailOpen}
          popupDetail={popupDetail}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(PopupManagePage);
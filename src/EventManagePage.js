import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Typography } from '@material-ui/core';

import SearchBar from './SearchBar';
import EventDetail from './EventDetail';
import CreateIcon from './CreateIcon';
import EventList from './EventList';
import { eventDetail, eventParticipateDetail, eventManageDetail, eventList } from './store';
import { header } from './stylesManagePage';

const styles = {
  header,
  subHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: -20,
  },
};

class EventManagePage extends Component {
  state = {
    detailOpen: false,
    detailId: -1,
  };

  handleClick = id => () => this.setState({ detailOpen: true, detailId: id });

  render() {
    const { classes } = this.props;
    const { detailOpen } = this.state;

    return (
      <div>
        <div className={classes.header}>
          <Typography variant='display1'>이벤트 관리</Typography>
          <SearchBar noMargin label='이벤트 검색' />
        </div>

        <div className={classes.subHeader}>
          <CreateIcon />
        </div>

        <EventList
          eventList={eventList}
          customHandleClick={this.handleClick}
          dontDisplayAsHeadline
        />

        <EventDetail
          open={detailOpen}
          eventDetail={eventDetail}
          eventManageDetail={eventManageDetail}
          eventParticipateDetail={eventParticipateDetail}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(EventManagePage);
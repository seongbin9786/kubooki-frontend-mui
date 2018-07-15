import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Typography } from '@material-ui/core';

import SearchBar from './SearchBar';
import EventDetail from './EventDetail';
import CreateIconBtn from './CreateIconBtn';
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
    create: false,
  };

  handleClick = id => () => {
    this.setState({ detailOpen: true, detailId: id });
    this.receiveFromServer(id);
  }

  handleCreateIconClick = () => {
    this.setState({ create: true, detailOpen: true, detailId: -1 });
    this.clear();
  }

  clear = () => this.setState({ eventDetail: null, eventManageDetail: null, eventParticipateDetail: null });

  receiveFromServer(id) {
    console.log('receive!');
    this.setState({
      eventDetail,
      eventManageDetail,
      eventParticipateDetail,
    });
  }

  render() {
    const { classes } = this.props;
    const { detailOpen, create } = this.state;
    console.log(create && '@@@ If this appears, there\'ll be no EventDetail @@@');

    return (
      <div>
        <div className={classes.header}>
          <Typography variant='display1'>이벤트 관리</Typography>
          <SearchBar noMargin label='이벤트 검색' />
        </div>

        <div className={classes.subHeader}>
          <CreateIconBtn onClick={this.handleCreateIconClick} />
        </div>

        <EventList
          eventList={eventList}
          customHandleClick={this.handleClick}
          dontDisplayAsHeadline
        />

        <EventDetail
          open={detailOpen}
          eventDetail={!create && eventDetail}
          eventManageDetail={!create && eventManageDetail}
          eventParticipateDetail={!create && eventParticipateDetail}
        />

      </div>
    );
  }
}

export default injectSheet(styles)(EventManagePage);
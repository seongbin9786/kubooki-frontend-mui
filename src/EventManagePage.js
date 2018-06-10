import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';

import SearchBar from './SearchBar';
import EventDetail from './EventDetail';
import CreateIcon from './CreateIcon';
import EventList from './EventList';
import { eventDetail, eventList } from './store';

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

class EventManagePage extends Component {
  state = {
    detailOpen: false,
    detailId: -1,
  };

  handleClick = id => () => this.setState({ detailOpen: true, detailId: id });

  render() {
    const { classes } = this.props;
    const { detailId, detailOpen } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant='display1'>이벤트 관리</Typography>
          <SearchBar noMargin label='이벤트 검색' />
        </div>
        <div className={classes.subHeader}>
          <CreateIcon />
        </div>

        <div className={classes.listContainer}>
          <EventList eventList={eventList} customHandleClick={this.handleClick} dontDisplayAsHeadline />
        </div>

        {detailOpen ? <EventDetail eventDetail={eventDetail} /> : null}
      </div>
    );
  }
}

export default withStyles(styles)(EventManagePage);
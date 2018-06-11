import React, { Component } from 'react';
import {
  withStyles,
  Typography,
} from '@material-ui/core';

import EventList from './EventList';
import { eventList, eventDetail, eventParticipateDetail } from './store';
import EventDetail from './EventDetail';

const styles = theme => ({
  root: {
    margin: '0 auto',
    marginTop: 20,
    maxWidth: 900,
    minWidth: 350,
    padding: '20px',
  },
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * -1,
  },
});

class MyEventListPage extends Component {
  state = {
    detailOpen: false,
  };

  handleModalOpen = id => () =>
    this.setState(({ detailOpen }) => ({
      detailOpen: !detailOpen
    }));

  render() {
    const { classes } = this.props;
    const { detailOpen } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant='display1'>내가 참여한 이벤트</Typography>

        <EventList
          eventList={eventList}
          dontDisplayAsHeadline
          customHandleClick={this.handleModalOpen}
          noSortBar
        />

        {detailOpen ?
          <EventDetail
            eventDetail={eventDetail}
            eventParticipateDetail={eventParticipateDetail}
          />
          : null
        }

      </div>
    );
  }
}
export default withStyles(styles)(MyEventListPage);
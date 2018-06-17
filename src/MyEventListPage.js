import React, { Component } from 'react';
import {
  withStyles,
  Typography,
} from '@material-ui/core';

import EventList from './EventList';
import { eventList, eventDetail, eventParticipateDetail } from './store';
import EventDetail from './EventDetail';

import { smallRootWithPadding } from './styles';
import LoadMoreBtn from './LoadMoreBtn';

const styles = theme => ({
  smallRootWithPadding,
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * -1,
  },
  loadMoreBtn: {
    marginBottom: 60,
  }
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
      <div className={classes.smallRootWithPadding}>
        <Typography variant='display1'>내가 참여한 이벤트</Typography>

        <EventList
          eventList={eventList}
          dontDisplayAsHeadline
          customHandleClick={this.handleModalOpen}
          noSortBar
          noTopMargin
          noBottomMargin
        />

        <LoadMoreBtn className={classes.loadMoreBtn} />

        <EventDetail
          open={detailOpen}
          eventDetail={eventDetail}
          eventParticipateDetail={eventParticipateDetail}
        />

      </div>
    );
  }
}
export default withStyles(styles)(MyEventListPage);
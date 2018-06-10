import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, Typography } from '@material-ui/core';

import GridListTemplate from './GridListTemplate';
import EventItem from './EventItem';
import EventHeadlineItem from './EventHeadlineItem';

const styles = theme => ({
  subHeader: {
    display: 'flex',
    alignItems: 'center',
    height: 40,
    paddingLeft: 10,
    borderLeft: '8px solid',
    borderColor: theme.palette.primary.main,
  },
  sortTitle: {
    fontFamily: 'Noto Sans KR Bold, sans-serif',
  }
});

function EventList({ eventList, classes, history, dontDisplayAsHeadline }) {
  const handleClick = eventNum => () => history.push(`/events/${eventNum}`);

  const items = eventList.map(
    (event, index) => <EventItem event={event} key={index} handleClick={handleClick} />
  );

  const subHeader = (
    <div className={classes.subHeader}>
      <Typography variant='headline' className={classes.sortTitle}>진행중인 이벤트</Typography>
    </div>
  );

  return (
    <React.Fragment>

      {dontDisplayAsHeadline ? null : <EventHeadlineItem />}

      <GridListTemplate
        titleType='display1'
        items={items}
        subHeader={subHeader}
        spacing={16}
        titleLeftmargin={24}
        noMoreLoadBtn
      />

    </React.Fragment>
  );
}

export default withStyles(styles)(withRouter(EventList));
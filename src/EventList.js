import React, { Component } from 'react';
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

class EventList extends Component {
  state = {
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { eventList, classes } = this.props;

    const items = eventList.map(
      (event, index) => <EventItem event={event} key={index} />
    );

    const subHeader = (
      <div className={classes.subHeader}>
        <Typography variant='headline' className={classes.sortTitle}>진행중인 이벤트</Typography>
      </div>
    );

    return (
      <React.Fragment>
        <EventHeadlineItem />

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
}

export default withStyles(styles)(EventList);
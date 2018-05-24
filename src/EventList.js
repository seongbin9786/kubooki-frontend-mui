import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core';

import GridListTemplate from './GridListTemplate';
import EventItem from './EventItem';

const styles = theme => ({
  filter: {
    display: 'inline-flex',
    position: 'relative',
    flexShrink: 0,
    verticalAlign: 'middle',

    color: 'rgba(0, 0, 0, .87)',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 2,
  }
});

class EventList extends Component {
  state = {
    participatingFilter: true,
    progressFilter: true,
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { eventList, classes } = this.props;
    const { participatingFilter, progressFilter } = this.state;

    const items = eventList.map(
      (event, index) => <EventItem event={event} key={index} />
    );

    const subHeader = (
      <div>
        <span className={classes.filter}>필터 옵션: </span>
        <FormControlLabel
          control={
            <Switch
              checked={progressFilter}
              onChange={this.handleChange('progressFilter')}
              color='primary'
            />
          }
          label="진행 중"
        />
        <FormControlLabel
          control={
            <Switch
              checked={participatingFilter}
              onChange={this.handleChange('participatingFilter')}
              color='primary'
            />
          }
          label="참여 중"
        />
      </div>
    );

    return (
      <React.Fragment>
        <GridListTemplate
          title='이벤트 목록'
          titleType='display1'
          subHeader={subHeader}
          items={items}
          moreBtnStr='이벤트 더 불러오기'
          spacing={16}
          titleLeftmargin={24}
        />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(EventList);
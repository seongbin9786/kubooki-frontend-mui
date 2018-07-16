import React from 'react';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { withWidth } from '@material-ui/core';

import GridListTemplate from '../utils/GridListTemplate';
import EventItem from '../components/EventItem';
import EventHeadlineItem from '../components/EventHeadlineItem';
import SortBar from '../components/inputs/SortBar';
import { smallRootWithPadding, fullHeight } from '../styles/styles';

const styles = {
  '@global': {
    'html, body, #root': fullHeight
  },
  smallRootWithPadding,
  fullHeight,
};

function EventList({ eventList, history, classes, noSortBar, tabName, customHandleClick, dontDisplayAsHeadline, noBottomMargin, noTopMargin }) {
  const handleClick = eventNum => () => history.push(`/events/${eventNum}`);

  const items = eventList.map(
    (event, index) => <EventItem event={event} key={index} handleClick={customHandleClick ? customHandleClick : handleClick} />
  );

  const subHeader = (
    <SortBar
      tabName={tabName ? tabName : '진행 중인 이벤트'}
      backgroundColor='white'
      leftHighlight
      bottomMargin={20}
    />
  );

  return (
    <div className={classes.fullHeight}>
      {dontDisplayAsHeadline ? null : <EventHeadlineItem />}

      <div className={classNames(classes.smallRootWithPadding, classes.fullHeight)}>
        <GridListTemplate
          titleType='display1'
          items={items}
          subHeader={noSortBar ? null : subHeader}
          noMoreLoadBtn
          noTopMargin={noTopMargin}
          noBottomMargin={noBottomMargin}
        />
      </div>
    </div>
  );
}

export default compose(withWidth(), injectSheet(styles))(withRouter(EventList));
import React from 'react';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { withWidth } from '@material-ui/core';

import GridListTemplate from './GridListTemplate';
import EventItem from './EventItem';
import EventHeadlineItem from './EventHeadlineItem';
import SortBar from './SortBar';
import { smallRoot, fullHeight } from './styles';

const styles = {
  '@global': {
    'html, body, #root': fullHeight
  },
  smallRoot,
  fullHeight,
  noPadding: {
    padding: 0,
  }
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

      <div className={classNames(classes.smallRoot, classes.fullHeight, classes.noPadding)}>
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
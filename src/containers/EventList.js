import React from 'react';

import GridListTemplate from '../utils/GridListTemplate';
import EventItem from '../components/EventItem';
import EventHeadlineItem from '../components/EventHeadlineItem';
import SortBar from '../components/inputs/SortBar';
import { SmallRootWithPaddingWithFullHeight, FullHeight } from '../styles/CommonStyledComponent';

function EventList({
  eventList, history, noSortBar, tabName,
  customHandleClick, dontDisplayAsHeadline,
  noBottomMargin, noTopMargin
}) {
  const handleClick = customHandleClick ? customHandleClick : eventNum => () => history.push(`/events/${eventNum}`);

  const items = eventList.map(
    (event, index) =>
      <EventItem
        event={event}
        key={index}
        handleClick={handleClick}
      />
  );

  const subHeader =
    <SortBar
      tabName={tabName ? tabName : '진행 중인 이벤트'}
      backgroundColor='white'
      leftHighlight
      bottomMargin={20}
    />;

  return (
    <FullHeight>
      {dontDisplayAsHeadline ? null : <EventHeadlineItem />}

      <SmallRootWithPaddingWithFullHeight>
        <GridListTemplate
          titleType='display1'
          items={items}
          subHeader={noSortBar ? null : subHeader}
          noMoreLoadBtn
          noTopMargin={noTopMargin}
          noBottomMargin={noBottomMargin}
        />
      </SmallRootWithPaddingWithFullHeight>
    </FullHeight>
  );
}

export default EventList;
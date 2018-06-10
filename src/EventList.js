import React from 'react';
import { withRouter } from 'react-router-dom';

import GridListTemplate from './GridListTemplate';
import EventItem from './EventItem';
import EventHeadlineItem from './EventHeadlineItem';
import SortBar from './SortBar';

function EventList({ eventList, history, customHandleClick, dontDisplayAsHeadline }) {
  const handleClick = eventNum => () => history.push(`/events/${eventNum}`);

  const items = eventList.map(
    (event, index) => <EventItem event={event} key={index} handleClick={customHandleClick ? customHandleClick : handleClick} />
  );

  const subHeader = (
    <SortBar tabName='진행 중인 이벤트' backgroundColor='white' leftHighlight />
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

export default withRouter(EventList);
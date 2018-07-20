import React from 'react';

import EventList from '../containers/EventList';
import { eventList } from '../modules/store';

export default ({ history }) => (
  <EventList
    history={history}
    eventList={eventList}
    noTopMargin
    noBottomMargin
  />
);
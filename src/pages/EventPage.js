import React from 'react';

import EventList from '../containers/EventList';
import { eventList } from '../modules/store';

export default () => (
  <EventList
    eventList={eventList}
    noTopMargin
    noBottomMargin
  />
);
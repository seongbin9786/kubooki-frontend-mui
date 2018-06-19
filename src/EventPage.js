import React from 'react';

import EventList from './EventList';
import withLoader from './withLoader';
import { eventList } from './store';

export default withLoader(() => (
  <EventList
    eventList={eventList}
    noTopMargin
    noBottomMargin
  />
));
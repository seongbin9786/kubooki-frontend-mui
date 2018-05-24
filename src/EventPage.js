import React from 'react';

import EventList from './EventList';

import { eventList } from './store';

export default () => (
  <EventList eventList={eventList} />
);
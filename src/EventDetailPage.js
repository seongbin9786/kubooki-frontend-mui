import React from 'react';

import BoardDetail from './BoardDetail';
import { eventItem } from './store';

export default () => <BoardDetail item={eventItem} useComment useLike />;
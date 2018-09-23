import React from 'react';
import { withWidth } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import BoardListMobile from './BoardListMobile';
import BoardListLarge from './BoardListLarge';

function BoardList({ width, rows, location: { pathname } }) {
  const ListTemplate = width === 'xs' ? BoardListMobile : BoardListLarge;

  return <ListTemplate rows={rows} pathname={pathname} />;
}

export default withWidth()(withRouter(BoardList));
import React from 'react';
import { withStyles } from '@material-ui/core';

import BoardList from './BoardList';
import { announcementListViewData } from './store';

const styles = theme => ({

});

function AnnouncementPage({ classes }) {
  return (
    <BoardList
      boardTitle='공지사항'
      boardList={announcementListViewData}
    />
  );
}

export default withStyles(styles)(AnnouncementPage);
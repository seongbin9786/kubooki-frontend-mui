import React from 'react';
import { withStyles } from '@material-ui/core';

import BoardList from '../containers/BoardList';
import { meetingLogListViewData } from '../modules/store';

const styles = theme => ({

});

function MeetingLogPage({ classes }) {
  return (
    <BoardList
      boardTitle='회의록'
      addButtonRightAlign
      boardList={meetingLogListViewData}
    />
  );
}

export default withStyles(styles)(MeetingLogPage);
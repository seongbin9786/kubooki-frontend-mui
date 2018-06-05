import React from 'react';
import { withStyles } from '@material-ui/core';

import { boardDetailData } from './store';
import BoardDetail from './BoardDetail';

const styles = theme => ({
  root: {
    margin: '0 auto',
    marginTop: 20,
    maxWidth: '1280px',
  },
  title: {
    marginBottom: 20,
  },
  date: {
    marginLeft: 5,
  }
});

function TermsOfService({ classes }) {
  return (
    <BoardDetail
      item={boardDetailData}
      useComment
    />
  );
};

export default withStyles(styles)(TermsOfService);
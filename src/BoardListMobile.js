import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, Divider } from '@material-ui/core';
import { Paper } from '@material-ui/core';

import BoardListMobileItem from './BoardListMobileItem';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

function BoardListMobile({ classes, rows, location: { pathname } }) {
  return (
    <Paper className={classes.root}>
      {rows.map((row, index) =>
        <React.Fragment>
          <BoardListMobileItem
            item={row}
            key={index}
            linkTemplate={pathname}
          />
          {rows.length - 1 !== index ? <Divider /> : null}
        </React.Fragment>
      )}
    </Paper>
  );
}

export default withStyles(styles)(withRouter(BoardListMobile));
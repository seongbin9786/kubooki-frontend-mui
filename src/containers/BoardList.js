import React from 'react';
import { withStyles, Typography, withWidth } from '@material-ui/core';

import BoardListMobile from './BoardListMobile';
import DialogOwnerComponent from './DialogOwnerComponent';
import BoardListTable from './BoardListTable';
import Pagination from './Pagination';
import BoardWriteDialog from './BoardWriteDialog';
import CreateIconBtn from './CreateIconBtn';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '20px',
  },
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 5,
  },
  rightAlign: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  pagination: {
    marginTop: 20,
  }
});

class BoardList extends DialogOwnerComponent {
  state = {
    dialogOpen: {
      write: false,
    }
  };

  render() {
    const { write } = this.state.dialogOpen;
    const { classes, width, addButtonRightAlign, boardTitle, boardList: { totalItems, list } } = this.props;
    const BoardListComponent = width === 'xs' ? BoardListMobile : BoardListTable;

    return (
      <div className={classes.root}>
        <Typography variant='display1' className={classes.title}>{boardTitle}</Typography>

        <div className={addButtonRightAlign ? classes.rightAlign : null}>
          <CreateIconBtn onClick={this.toggleDialog('write')} />
        </div>

        <BoardWriteDialog
          category={boardTitle}
          open={write}
          handleClose={this.toggleDialog('write')}
        />

        <BoardListComponent rows={list} />

        <div className={classes.pagination}>
          <Pagination total={totalItems} center />
        </div>
      </div>
    );
  }
}

export default withWidth()(withStyles(styles)(BoardList));
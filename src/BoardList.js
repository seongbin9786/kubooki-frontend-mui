import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';

import BoardListTable from './BoardListTable';
import Pagination from './Pagination';
import FaIconBtn from './FaIconBtn';
import BoardWriteDialog from './BoardWriteDialog';
import CreateIcon from './CreateIcon';

const styles = theme => ({
  root: {
    margin: '0 auto',
    maxWidth: '1000px',
    padding: '20px',
  },
  rightAlign: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  pagination: {
    marginTop: 20,

    display: 'flex',
    justifyContent: 'center'
  }
});

class BoardList extends Component {
  state = {
    writeDialogOpen: false,
  };

  toggleDialog = () => this.setState(({ writeDialogOpen }) => ({
    writeDialogOpen: !writeDialogOpen
  }))

  render() {
    const { classes, addButtonRightAlign, boardTitle, boardList } = this.props;
    const { writeDialogOpen } = this.state;
    const { totalItems, list } = boardList;

    return (
      <div className={classes.root}>
        <Typography variant='display1'>{boardTitle}</Typography>

        <div className={addButtonRightAlign ? classes.rightAlign : null}>
          <CreateIcon
            variant="fab"
            color="primary"
            onClick={this.toggleDialog}
          />
        </div>

        {writeDialogOpen
          ? <BoardWriteDialog
            category={boardTitle}
            open={writeDialogOpen}
            handleClose={this.toggleDialog}
          />
          : null
        }

        <BoardListTable rows={list} />

        <div className={classes.pagination}>
          <Pagination total={totalItems} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BoardList);
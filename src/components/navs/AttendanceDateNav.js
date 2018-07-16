import React from 'react';
import moment from 'moment';
import { withStyles, TextField, Paper } from '@material-ui/core';
import FaIconBtn from '../buttons/FaIconBtn';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  paper: {
    display: 'inline-block',
    padding: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function AttendanceDateNav({ classes, right }) {
  const today = moment().format('YYYY[-]MM[-]DD');

  return (
    <div className={right ? classes.container : null}>
      <Paper className={classes.paper}>
        <TextField
          id="date"
          label="날짜"
          type="date"
          defaultValue={today}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FaIconBtn variant='raised' btnStr='이동' icon='paper-plane' color='primary' />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(AttendanceDateNav);

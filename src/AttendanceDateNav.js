import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import FaIconBtn from './FaIconBtn';

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

function DatePickers({ classes, right }) {
  return (
    <div className={right ? classes.container : null}>
      <Paper className={classes.paper}>
        <TextField
          id="date"
          label="날짜"
          type="date"
          defaultValue="2018-06-10" // today!
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FaIconBtn variant='raised' btnStr='이동' type='paper-plane' color='primary' />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(DatePickers);

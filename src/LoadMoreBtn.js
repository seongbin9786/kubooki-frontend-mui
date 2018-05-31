import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  moreButton: {
    width: '100%',
    marginTop: 30,
    height: 48,
    fontSize: 24,
    borderRadius: 12
  }
});

export default withStyles(styles)(({ classes, btnStr }) => (
  <Button
    variant="raised"
    color="primary"
    className={classes.moreButton}
  >
    {btnStr ? btnStr : '더 불러오기'}
  </Button>
));
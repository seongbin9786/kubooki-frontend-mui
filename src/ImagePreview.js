import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  thumbnailContainer: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  },
  UploadBtn: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: 2
  },
  name: {
    marginBottom: theme.spacing.unit,
  },
  default: {
    height: 'auto',
    width: '100%'
  },
});

export default withStyles(styles)(({
  classes,
  value,
  name,
  isForm,
  btn,
  btnLocation,
  isCircle,
  size,
}) => (
  <div className={isForm ? classes.thumbnailContainer : null}>
    {isForm ? <InputLabel className={classes.name}>{name}</InputLabel> : null}
    <img
      className={isCircle ? null : classes.default}
      style={isCircle ?
        {
          height: size,
          width: size,
          borderRadius: '50%',
        }
        : null
      }
      alt={name}
      src={value}
    />
  </div>
));
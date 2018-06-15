import React from 'react';
import compose from 'recompose/compose';
import injectSheet from 'react-jss';
import { withWidth } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

import theme from './ThemeConfig';

const styles = {
  thumbnailContainer: props => props.isForm ? ({
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
  }) : null,
  UploadBtn: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: 2
  },
  name: {
    marginBottom: theme.spacing.unit,
  },
  img: ({ isForm, isCircle, width, size }) => ({
    borderRadius: isCircle ? '50%' : 0,
    height: 'auto',
    width: !isForm && width !== 'xs' ? size : '100%'
  }),
};

function ImagePreview({ classes, value, name, isForm }) {
  return (
    <div className={classes.thumbnailContainer}>
      {isForm ? <InputLabel className={classes.name}>{name}</InputLabel> : null}
      <img
        className={classes.img}
        alt={name}
        src={value}
      />
    </div>
  );
};

export default compose(withWidth(), injectSheet(styles))(ImagePreview);
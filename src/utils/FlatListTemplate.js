import React from 'react';
import { Paper, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 1100,
  },
  listContainer: {
    margin: '20px 0',
  },
  noContent: {
    textAlign: 'center',
    padding: '30px',
    color: theme.palette.primary.light,
  },
});

function FlatListTemplate({
  classes,
  title,
  titleType,
  subHeader,
  items,
  noContentMsg,
  paperWrap,
  loadMoreBtn,
  noMargin
}) {
  const content = items
    ? items
    : <Typography
      variant='headline'
      className={classes.noContent}
    >
      {noContentMsg}
    </Typography>;

  return (
    <div className={classes.root}>
      {title ? <Typography variant={titleType}>{title}</Typography> : null}
      {subHeader}
      <div
        className={noMargin ? null : classes.listContainer}
        elevation={1}
      >
        {paperWrap ? <Paper>{content}</Paper> : content}
        {loadMoreBtn ? loadMoreBtn : null}
      </div>
    </div>
  );
};

export default withStyles(styles)(FlatListTemplate);
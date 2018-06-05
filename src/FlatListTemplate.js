import React from 'react';
import { Paper, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    maxWidth: '1100px',
    margin: '0 auto',
    marginTop: '40px',
  },
  listContainer: {
    marginTop: 20,
    marginBottom: 80,
    width: '100%',
  },
  noContent: {
    textAlign: 'center',
    padding: '30px',
    color: theme.palette.primary.light,
  },
});

export default withStyles(styles)(({ classes, title, titleType, subHeader, items, noContentMsg, paperWrap, loadMoreBtn }) => {
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
      <Typography variant={titleType}>{title}</Typography>
      {subHeader}
      <div
        className={classes.listContainer}
        elevation={1}
      >
        {paperWrap ? <Paper>{content}</Paper> : content}
        {loadMoreBtn ? loadMoreBtn : null}
      </div>
    </div>
  );
});
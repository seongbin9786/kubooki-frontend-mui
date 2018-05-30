import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

import { article } from './store';

const styles = theme => ({
  root: {
    margin: '0 auto',
    marginTop: 20,
    maxWidth: '1280px',
  },
  title: {
    marginBottom: 20,
  },
  date: {
    marginLeft: 5,
  }
});

function TermsOfService({ classes }) {
  const {
    title,
    content,
    lastUpdateDate,
  } = article;
  return (
    <div className={classes.root}>
      <article>
        <Typography
          variant='display1'
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          variant='subheading'
          className={classes.date}
        >
          최초 수정 날짜: {lastUpdateDate}
        </Typography>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
};

export default withStyles(styles)(TermsOfService);
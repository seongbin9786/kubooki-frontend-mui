import React from 'react';
import { Divider, withStyles, Grid, Paper } from '@material-ui/core';

import FlatListTemplate from '../../utils/FlatListTemplate';
import ChartRecentActivityItem from './ChartRecentActivityItem';

const styles = theme => ({
  counter: {
    color: theme.palette.primary.main
  },
  listContainer: {
    padding: theme.spacing.unit,
  },
  header: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'normal',
    fontSize: '1.5rem',

    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    marginBottom: 0,

    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
});

function ChartRecentActivityList({ classes, list }) {
  const noContentMsg = <span>활동이 없습니다.</span>;
  const items = list ? list.map((item, index) =>
    <React.Fragment key={index}>
      <ChartRecentActivityItem item={item} />
      {index !== list.length - 1 ? <Divider /> : null}
    </React.Fragment>
  ) : null;

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={1}>
        <div className={classes.header}>최근 활동</div>
        <div className={classes.listContainer}>
          <FlatListTemplate
            items={items}
            noContentMsg={noContentMsg}
            noMargin
          />
        </div>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(ChartRecentActivityList);
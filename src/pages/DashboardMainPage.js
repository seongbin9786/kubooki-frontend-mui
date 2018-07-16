import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import ChartKubookiUsageRate from '../components/charts/ChartKubookiUsageRate';
import ChartViewCountByCategory from '../components/charts/ChartViewCountByCategory';
import ChartServerResourceUsage from '../components/charts/ChartServerResourceUsage';
import ChartRecentActivityList from '../components/charts/ChartRecentActivityList';
import ChartActiveness from '../components/charts/ChartActiveness';
import ChartNewsUploadRate from '../components/charts/ChartNewsUploadRate';
import { recentActivities } from '../modules/store';

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '1rem',
    fontWeight: 300,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'rgb(120, 129, 149)',
  },
  header: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'normal',
    fontSize: '1.5rem',

    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  },
  single: {
    height: 150,
  },
  double: {
    height: 300,
  },
});

function DashboardMainPage({ classes }) {
  return (
    <Grid container spacing={24} className={classes.root}>

      <Grid item xs={12}>
        <Paper elevation={1} className={classes.header}>서버 리소스 사용 현황</Paper>
        <Grid container>
          <ChartServerResourceUsage typeName='CPU' color='#f59f00' />
          <ChartServerResourceUsage typeName='Memory' color='#d6336c' />
          <ChartServerResourceUsage typeName='Disk' color='#37b24d' />
          <ChartServerResourceUsage typeName='Network' color='#4263eb' />
        </Grid>
      </Grid>

      <ChartKubookiUsageRate />

      <ChartViewCountByCategory />

      <ChartRecentActivityList list={recentActivities} />

      <ChartActiveness />

      <ChartNewsUploadRate />

    </Grid>
  );
}

export default withStyles(styles)(DashboardMainPage);
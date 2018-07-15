import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import {
  LineChart,
  Line,
  Legend,
  ResponsiveContainer
} from 'recharts';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 6,
  },
  paper: {
    position: 'relative',
    color: 'rgb(120, 129, 149)',
    height: 150,
  },
  header: {
    fontFamily: 'Noto Sans KR',
    fontWeight: 'normal',
    fontSize: '1.5rem',

    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    marginBottom: 20,

    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  chart: {
    margin: theme.spacing.unit * 2,
    height: '100% !important',
    marginLeft: 0,
  }
});

let data = [];

function ChartServerResourceUsage({ classes, typeName, color }) {
  data = [
    { 날짜: '6시간 전', [typeName]: 1 },
    { 날짜: '5시간 전', [typeName]: 38 },
    { 날짜: '4시간 전', [typeName]: 5 },
    { 날짜: '3시간 전', [typeName]: 99 },
    { 날짜: '2시간 전', [typeName]: 1 },
    { 날짜: '1시간 전', [typeName]: 0 },
    { 날짜: '현재', [typeName]: 3 },
  ];

  return (
    <Grid item xs={12} sm={6} md={3} className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <ResponsiveContainer className={classes.chart}>
          <LineChart data={data}>
            <Legend />
            <Line type="monotone" dataKey={typeName} stroke={color} legendType='diamond' dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(ChartServerResourceUsage);
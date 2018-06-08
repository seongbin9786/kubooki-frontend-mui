import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'relative',
    color: 'rgb(120, 129, 149)',
    height: 280,
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
    height: '70% !important',
    marginLeft: -16,
  }
});

const data = [
  { 날짜: '6일 전', 가입자: 530, 좋아요: 110, 댓글: 80 },
  { 날짜: '5일 전', 가입자: 400, 좋아요: 58, 댓글: 50 },
  { 날짜: '4일 전', 가입자: 150, 좋아요: 120, 댓글: 79 },
  { 날짜: '3일 전', 가입자: 340, 좋아요: 55, 댓글: 50 },
  { 날짜: '2일 전', 가입자: 130, 좋아요: 248, 댓글: 78 },
  { 날짜: '어제', 가입자: 210, 좋아요: 192, 댓글: 150 },
  { 날짜: '오늘', 가입자: 340, 좋아요: 143, 댓글: 50 },
];

function ChartKubookiUsageRate({ classes }) {
  return (
    <Grid item xs={12} md={6} lg={12} >
      <Paper elevation={1} className={classes.paper}>
        <div className={classes.header}>
          거북이 이용률 현황
        </div>
        <ResponsiveContainer className={classes.chart}>
          <LineChart data={data}>
            <XAxis dataKey="날짜" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="가입자" stroke="#37b24d" legendType='diamond' />
            <Line type="monotone" dataKey="좋아요" stroke="#f08c00" legendType='diamond' />
            <Line type="monotone" dataKey="댓글" stroke="#4263eb" legendType='diamond' />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(ChartKubookiUsageRate);
import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
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
    marginLeft: -8,
  }
});

const data = [
  { 날짜: '5주 전', 경기소식: 2, 기획연재: 5, 경대피플: 1 },
  { 날짜: '4주 전', 경기소식: 3, 기획연재: 3, 경대피플: 0 },
  { 날짜: '3주 전', 경기소식: 2, 기획연재: 4, 경대피플: 0 },
  { 날짜: '저번 주', 경기소식: 1, 기획연재: 3, 경대피플: 2 },
  { 날짜: '이번 주', 경기소식: 2, 기획연재: 3, 경대피플: 1 },
];

function ChartViewCountByCategory({ classes }) {
  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={1} className={classes.paper}>
        <div className={classes.header}>
          주별 업로드 기사 수
        </div>
        <ResponsiveContainer className={classes.chart}>
          <BarChart data={data}>
            <XAxis dataKey="날짜" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='기획연재' stackId="a" fill='#364fc7' />
            <Bar dataKey='경대피플' stackId="a" fill='#d9480f' />
            <Bar dataKey='경기소식' stackId="a" fill='#2b8a3e' />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(ChartViewCountByCategory);
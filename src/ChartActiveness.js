import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 6,
  },
  paper: {
    position: 'relative',
    color: 'rgb(120, 129, 149)',
    height: 315,
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
    marginLeft: -10,
  }
});

const data = [
  { date: '한 달 전', 활동점수: -1000 },
  { date: '3주 전', 활동점수: 500 },
  { date: '2주 전', 활동점수: -2000 },
  { date: '저번 주', 활동점수: -250 },
  { date: '이번 주', 활동점수: 3490 },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  else if (dataMin >= 0) {
    return 1;
  }
  else {
    return dataMax / (dataMax - dataMin);
  }
};

const off = gradientOffset();

function ChartActiveness({ classes, typeName, color }) {
  return (
    <Grid item xs={12} md={6} className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <div className={classes.header}>
          주 별 전체 활동량 증감폭
        </div>
        <ResponsiveContainer className={classes.chart}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="#fcc419" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="활동점수" stroke="#f08c00" fill="url(#splitColor)" />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(ChartActiveness);
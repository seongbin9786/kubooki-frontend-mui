import React from 'react';
import { withStyles, Grid, Paper } from '@material-ui/core';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
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
  { 날짜: '6일 전', 경기소식: 4000, 기획연재: 2400, 경대피플: 2400 },
  { 날짜: '5일 전', 경기소식: 3000, 기획연재: 1398, 경대피플: 2210 },
  { 날짜: '4일 전', 경기소식: 2000, 기획연재: 9800, 경대피플: 2290 },
  { 날짜: '3일 전', 경기소식: 2780, 기획연재: 3908, 경대피플: 2000 },
  { 날짜: '2일 전', 경기소식: 1890, 기획연재: 4800, 경대피플: 2181 },
  { 날짜: '어제', 경기소식: 2390, 기획연재: 3800, 경대피플: 2500 },
  { 날짜: '오늘', 경기소식: 3490, 기획연재: 4300, 경대피플: 2100 },
];

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {
          payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

function ChartViewCountByCategory({ classes }) {
  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={1} className={classes.paper}>
        <div className={classes.header}>
          분류별 기사 조회수
        </div>
        <ResponsiveContainer className={classes.chart}>
          <AreaChart data={data} stackOffset="expand">
            <XAxis dataKey="날짜" />
            <YAxis tickFormatter={toPercent} />
            <Tooltip content={renderTooltipContent} />
            <Area type='monotone' dataKey='기획연재' stackId="1" stroke='#364fc7' fill='#748ffc' opacity='0.6' />
            <Area type='monotone' dataKey='경대피플' stackId="1" stroke='#d9480f' fill='#ffa94d' opacity='0.6' />
            <Area type='monotone' dataKey='경기소식' stackId="1" stroke='#2b8a3e' fill='#69db7c' opacity='0.6' />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(ChartViewCountByCategory);
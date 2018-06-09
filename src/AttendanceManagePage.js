import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip';

import './attendanceHeatmap.css';
import SearchBar from './SearchBar';
import AttendanceList from './AttendanceList';
import { attendanceUserList } from './store';

const styles = theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statusBoard: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 30,
  },
  listContainer: {
  },
});

// MAX: 14
const values = [
  { date: '2018-05-03', count: 4, attend: 14, },
  { date: '2018-05-07', count: 3, attend: 14, },
  { date: '2018-05-10', count: 4, attend: 14, },
  { date: '2018-05-14', count: 2, attend: 8, },
  { date: '2018-05-17', count: 0, attend: 0, },
  { date: '2018-05-21', count: 0, attend: 0, },
  { date: '2018-05-24', count: 3, attend: 10, },
  { date: '2018-05-28', count: 3, attend: 13, },
  { date: '2018-05-31', count: 4, attend: 14, },

  { date: '2018-06-04', count: 4, attend: 14, },
  { date: '2018-06-07', count: 4, attend: 14, },
  { date: '2018-06-11', count: 3, attend: 12, },
  { date: '2018-06-14', count: 3, attend: 13, },
  { date: '2018-06-18', count: 4, attend: 14, },
  { date: '2018-06-21', count: 4, attend: 14, },
  { date: '2018-06-25', count: 3, attend: 13, },
  { date: '2018-06-28', count: 3, attend: 13, },
];

function githubClassForValue(value) {
  if (!value) return 'color-empty';
  return `color-github-${value.count}`;
}

const customTooltipDataAttrs = value => {
  if (!value.date) return;

  const { date, attend } = value;
  return ({ 'data-tip': `${date}에 ${attend}명이 출석했습니다` });
}

function AttendanceManagePage({ classes }) {
  return (
    <div>
      <div className={classes.header}>
        <Typography variant='display1'>출석 관리 페이지</Typography>
        <SearchBar noMargin />
      </div>

      <div className={classes.statusBoard}>
        <CalendarHeatmap
          startDate={'2018-01-01'}
          endDate={'2018-12-31'}
          values={values}
          onClick={value => console.log(value)}

          tooltipDataAttrs={customTooltipDataAttrs}
          classForValue={githubClassForValue}
        >
        </CalendarHeatmap>
        <ReactTooltip place="top" type="dark" effect="float" />
      </div>

      <div className={classes.listContainer}>
        <AttendanceList userList={attendanceUserList} />
      </div>
    </div >
  );
};

export default withStyles(styles)(AttendanceManagePage);
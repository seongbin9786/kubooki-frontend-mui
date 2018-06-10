import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import './attendanceHeatmap.css';
import SearchBar from './SearchBar';
import AttendanceList from './AttendanceList';
import { attendanceUserList, attendanceValues } from './store';
import AttendanceDateNav from './AttendanceDateNav';

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

function githubClassForValue(value) {
  if (!value) return 'color-empty';
  return `color-gitlab-${value.count}`;
}

const customTooltipDataAttrs = value => {
  if (!value.date) return;

  const { date, meetingAttend, webAttend } = value;
  return ({ 'data-tip': `[${date}]<br>[웹] ${webAttend}명<br>[회의실] ${meetingAttend}명` });
};

function AttendanceManagePage({ classes }) {
  return (
    <div>
      <div className={classes.header}>
        <Typography variant='display1'>출석 관리 페이지</Typography>
        <SearchBar noMargin label='기자 검색' />
      </div>

      <div className={classes.statusBoard}>
        <CalendarHeatmap
          startDate={'2018-01-01'}
          endDate={'2018-12-31'}
          values={attendanceValues}
          onClick={value => console.log(value)}

          tooltipDataAttrs={customTooltipDataAttrs}
          classForValue={githubClassForValue}
        >
        </CalendarHeatmap>
        <ReactTooltip place="top" type="dark" effect="float" multiline />
      </div>

      <div className={classes.listContainer}>
        <AttendanceDateNav right />
        <AttendanceList userList={attendanceUserList} />
      </div>
    </div >
  );
};

export default withStyles(styles)(AttendanceManagePage);
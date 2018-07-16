import React, { Component } from 'react';
import moment from 'moment';
import injectSheet from 'react-jss';
import { Typography } from '@material-ui/core';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import '../styles/attendanceHeatmap.css';
import SearchBar from '../components/inputs/SearchBar';
import AttendanceList from '../containers/AttendanceList';
import { attendanceUserList, attendanceValues } from '../modules/store';
import AttendanceDateNav from '../components/navs/AttendanceDateNav';
import { header } from '../styles/stylesManagePage';

const styles = {
  header,
  statusBoard: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 30,
    overflow: 'scroll',
  },
};

function githubClassForValue(value) {
  if (!value) return 'color-empty';
  return `color-gitlab-${value.count}`;
}

const customTooltipDataAttrs = value => {
  if (!value.date) return;

  const { date, meetingAttend, webAttend } = value;
  return ({ 'data-tip': `[${date}]<br>[웹] ${webAttend}명<br>[회의실] ${meetingAttend}명` });
};

class AttendanceManagePage extends Component {

  // 히트맵: 현재 월에 해당하는 위치로 스크롤
  componentDidMount() {
    const month = moment().month();
    const weight = month >= 5 ? 50 : 0;
    document.getElementById('statusBoard').scrollLeft = month * weight;
  }

  // 무한정 Update되는 버그가 있었음.
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.header}>
          <Typography variant='display1'>출석 관리 페이지</Typography>
          <SearchBar noMargin label='기자 검색' />
        </div>

        <div id='statusBoard' className={classes.statusBoard}>
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

        <div>
          <AttendanceDateNav right />
          <AttendanceList userList={attendanceUserList} />
        </div>
      </div >
    );
  }
};

export default injectSheet(styles)(AttendanceManagePage);
import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Toolbar,
  Typography, Paper, Checkbox, Tooltip, Avatar, Hidden,
} from '@material-ui/core';

import FaIconBtn from '../components/buttons/FaIconBtn';

// 자주 사용할 수 있는 부분은 재사용
// 테이블의 추가적인 기능(Toolbar, Hidden 등)을 사용하기 때문에 복잡함
// TableTemplate를 사용할 수 있으면 하고, 확장해야 하면 확장까지 하도록
// 스타일링 코드가 굉장히 김
// TableCell도 data만 넘길 수 있는 형태라면 좋을탠데
class EnhancedTableHead extends React.Component {
  render() {
    const { onSelectAllClick, numSelected, rowCount } = this.props;

    return (
      <Hidden only="xs">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={numSelected === rowCount}
                onChange={onSelectAllClick}
                color='primary'
              />
            </TableCell>
            <TableCell>이름</TableCell>
            <TableCell>등급</TableCell>
            <TableCell>부서</TableCell>
            <TableCell>웹 출석여부</TableCell>
            <TableCell>회의 출석여부</TableCell>
          </TableRow>
        </TableHead>
      </Hidden>
    );
  }
}

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight: {
    color: theme.palette.primary.main,
    backgroundColor: 'white',
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.primary.main,
    minWidth: 100,
  },
  title: {
    flex: '0 0 auto',
    marginRight: 4,
  },
  today: {
    whiteSpace: 'nowrap',
  }
});

const currentDepartment = '개발부';
const today = moment().format('YYYY[-]MM[-]DD');

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected}명 선택됨
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
            {currentDepartment + ' 출석부'}
          </Typography>
        )}
      </div>
      <Typography variant='caption' className={classes.today}>{today}</Typography>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <React.Fragment>
            <Tooltip title="출석">
              <FaIconBtn onlyIcon icon='briefcase' />
            </Tooltip>
            <Tooltip title="지각">
              <FaIconBtn onlyIcon icon='clock' />
            </Tooltip>
          </React.Fragment>
        ) : null}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    maxWidth: '100%',
  },
  table: {
    display: 'table',
    width: '100%',
    overflowX: 'auto',
  },
  nameContainer: {
    textAlign: 'center',
  },
  avatar: {
    display: 'block',
    marginRight: 6,

    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  },

  tableBodyData: {
    display: 'block',
    padding: 12,
    fontSize: 14,
    textAlign: 'right',

    tableBodyRow: {
      //Small Screen
      height: 'auto',
      marginTop: 10,
      backgroundColor: 'lightgrey',

      [theme.breakpoints.up('sm')]: {
        height: 48,
        display: 'table-row',
        backgroundColor: '#fff'
      }
    },

    '&:last-child': {
      // 24인것 오버라이딩
      paddingRight: 12,
    },

    // Adding each data table head from here
    '&:before': {
      content: 'attr(datatitle)',
      verticalAlign: '-50%',
      float: 'left',
      fontWeight: 600,
      color: '#000'
    },

    [theme.breakpoints.up('sm')]: {
      display: 'table-cell',
      fontSize: 14,
      textAlign: 'left',
      borderBottom: '1px solid #ccc',

      '&:before': {
        content: '',
        display: 'none'
      }
    }
  }
});

class EnhancedTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selected: [],
      data: props.userList,
    };
  }

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, selected } = this.state;
    const EnhancedTableCell = props =>
      <TableCell classes={{ root: classes.tableBodyData }} {...props}>{props.children}</TableCell>;

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Table classes={{ root: classes.table }}>
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={this.handleSelectAllClick}
            rowCount={data.length}
          />
          <TableBody>
            {data.map(({ id, profilePic, name, role, department, attendState: { webAttend, meetingAttend } }) => {
              const isSelected = this.isSelected(id);
              return (
                <TableRow
                  hover
                  onClick={event => this.handleClick(event, id)}
                  tabIndex={-1}
                  key={id}
                  selected={isSelected}
                  classes={{ root: classes.tableBodyRow }}
                >

                  <EnhancedTableCell datatitle="번호" padding="checkbox">
                    <Checkbox checked={isSelected} color='primary' />
                  </EnhancedTableCell>

                  <EnhancedTableCell
                    datatitle="이름"
                    component="th"
                    scope="row"
                    className={classes.nameContainer}
                  >
                    <Avatar src={profilePic} alt={name} className={classes.avatar} />{name}
                  </EnhancedTableCell>

                  <EnhancedTableCell datatitle="등급">{role}</EnhancedTableCell>
                  <EnhancedTableCell datatitle="부서">{department}</EnhancedTableCell>
                  <EnhancedTableCell datatitle="웹 출석여부">{webAttend}</EnhancedTableCell>
                  <EnhancedTableCell datatitle="회의 출석여부">{meetingAttend}</EnhancedTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(EnhancedTable);
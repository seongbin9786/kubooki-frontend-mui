import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Toolbar,
  Typography, Paper, Checkbox, Tooltip, Avatar,
} from '@material-ui/core';

import FaIconBtn from './FaIconBtn';

class EnhancedTableHead extends React.Component {
  render() {
    const { onSelectAllClick, numSelected, rowCount } = this.props;

    return (
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
              <FaIconBtn onlyIcon type='briefcase' />
            </Tooltip>
            <Tooltip title="지각">
              <FaIconBtn onlyIcon type='clock' />
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
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    display: 'inline-block',
    marginRight: 6,
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

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Table>
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
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isSelected} color='primary' />
                  </TableCell>
                  <TableCell component="th" scope="row" className={classes.nameContainer}>
                    <Avatar src={profilePic} alt={name} className={classes.avatar} />{name}
                  </TableCell>
                  <TableCell>{role}</TableCell>
                  <TableCell>{department}</TableCell>
                  <TableCell>{webAttend}</TableCell>
                  <TableCell>{meetingAttend}</TableCell>
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